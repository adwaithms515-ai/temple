export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export interface PaymentOptions {
  amount: number; // Amount in INR
  name: string;
  description: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  onSuccess: (response: any) => void;
  onError: (error: any) => void;
}

export const initializePayment = async (options: PaymentOptions) => {
  const isLoaded = await loadRazorpayScript();
  
  if (!isLoaded) {
    options.onError(new Error("Razorpay SDK failed to load. Are you offline?"));
    return;
  }

  try {
    // 1. Create order on the backend
    const orderResponse = await fetch("http://localhost:5000/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: options.amount }),
    });

    const orderData = await orderResponse.json();

    if (!orderData.success) {
      throw new Error(orderData.error || "Failed to create order");
    }

    const { order } = orderData;

    // 2. Initialize Razorpay Checkout
    const razorpayOptions = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY_HERE", // Add your key here or in .env
      amount: order.amount,
      currency: order.currency,
      name: "Thiruvannur Sree Krishna Temple",
      description: options.description,
      image: "/deities/krishna-bal.jpg",
      order_id: order.id,
      handler: async function (response: any) {
        // 3. Verify payment on the backend
        try {
          const verifyResponse = await fetch("http://localhost:5000/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();
          if (verifyData.success) {
            options.onSuccess(response);
          } else {
            options.onError(new Error(verifyData.error || "Payment verification failed"));
          }
        } catch (err) {
          options.onError(new Error("Failed to verify payment"));
        }
      },
      prefill: {
        name: options.customerName || "",
        email: options.customerEmail || "",
        contact: options.customerPhone || "",
      },
      theme: {
        color: "#1A3A6C", // Temple primary color (Peacock Blue)
      },
    };

    const paymentObject = new window.Razorpay(razorpayOptions);
    
    paymentObject.on('payment.failed', function (response: any){
      options.onError(response.error);
    });

    paymentObject.open();
  } catch (error: any) {
    console.error("Payment initialization error:", error);
    options.onError(error);
  }
};

// Add TypeScript definition for window.Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}
