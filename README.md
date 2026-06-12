# Thiruvannur Sree Krishna Temple - Official Website

A modern, responsive, and beautifully designed frontend web application for the Thiruvannur Sree Krishna Temple, built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- **Home Page**: Beautiful hero section, quick links, and introductory content.
- **Pooja Booking**: Integrated with Razorpay mock test mode for online pooja bookings.
- **Darshan Booking**: Slot-based booking system for special darshans.
- **Deities & Festivals**: Information sections about the temple's presiding deities and upcoming festivals.
- **Donations**: Support for online contributions to the temple fund.
- **Admin Dashboard**: A comprehensive (mocked) CMS dashboard to manage bookings, poojas, website content, and more.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Malayalam Support**: Bilingual support integrated directly into the design.

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion/React (Framer Motion)](https://motion.dev/)
- **Payments**: Razorpay (Test Mode)

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/temple-website.git
cd temple-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of the project based on the provided `.env.example`.

```bash
cp .env.example .env
```

Open `.env` and add your Razorpay Test Key ID if you wish to test the payment flow:

```env
VITE_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_HERE
```

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Admin Dashboard

To access the admin dashboard, navigate to `http://localhost:5173/admin` or click "Admin Dashboard" in the footer.
- **Password**: `admin`

*(Note: The admin dashboard is currently a frontend-only mockup and does not persist data to a database. It serves as the UI foundation for a future backend integration).*

## License

This project is open-source and available under the MIT License.