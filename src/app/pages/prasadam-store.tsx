import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ShoppingCart, Plus, Minus } from "lucide-react";

export function PrasadamStorePage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const products = [
    { id: "1", name: "Temple Prasadam", price: 100, category: "Prasadam" },
    { id: "2", name: "Kumkum Powder", price: 50, category: "Pooja Items" },
    { id: "3", name: "Vibhuti (Sacred Ash)", price: 30, category: "Pooja Items" },
    { id: "4", name: "Rudraksha Mala", price: 500, category: "Spiritual Items" },
    { id: "5", name: "Brass Lamp", price: 350, category: "Temple Items" },
    { id: "6", name: "Sandalwood Incense", price: 150, category: "Pooja Items" },
  ];

  const updateCart = (id: string, delta: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === id);
    return sum + (product?.price || 0) * qty;
  }, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#6E1F1F] to-[#6E1F1F]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <ShoppingCart className="w-16 h-16 text-[#D4B870] mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Prasadam Store</h1>
            <p className="text-xl text-[#D4B870]">Sacred Items & Blessed Offerings</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-[#C9A227]/20 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="aspect-square bg-[#FAF6EE] rounded-lg mb-4 flex items-center justify-center">
                          <ShoppingCart className="w-16 h-16 text-[#C9A227]" />
                        </div>
                        <Badge className="mb-2 bg-[#FAF6EE] text-[#C9A227]">{product.category}</Badge>
                        <h3 className="font-heading text-lg text-[#6E1F1F] mb-2">{product.name}</h3>
                        <p className="text-[#C9A227] text-xl mb-4">₹{product.price}</p>
                        {cart[product.id] ? (
                          <div className="flex items-center justify-between bg-[#FAF6EE] rounded-lg p-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => updateCart(product.id, -1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-[#6E1F1F]">{cart[product.id]}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => updateCart(product.id, 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="w-full bg-[#C9A227] hover:bg-[#D4B870]"
                            onClick={() => updateCart(product.id, 1)}
                          >
                            Add to Cart
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-[#C9A227]/20 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-[#6E1F1F] mb-4">Cart Summary</h3>
                  {Object.keys(cart).length === 0 ? (
                    <p className="text-[#666666] text-sm">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-3 mb-6">
                        {Object.entries(cart).map(([id, qty]) => {
                          const product = products.find((p) => p.id === id);
                          if (!product || qty === 0) return null;
                          return (
                            <div key={id} className="flex justify-between text-sm">
                              <span className="text-[#666666]">
                                {product.name} x{qty}
                              </span>
                              <span className="text-[#6E1F1F]">₹{product.price * qty}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border-t border-[#C9A227]/20 pt-4 mb-4">
                        <div className="flex justify-between text-lg">
                          <span className="text-[#6E1F1F]">Total</span>
                          <span className="text-[#C9A227]">₹{cartTotal}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#C9A227] hover:bg-[#D4B870]">
                        Proceed to Checkout
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

