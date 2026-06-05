import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="font-heading text-9xl text-[#C9A227] mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl text-[#6E1F1F] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#666666] mb-8 text-lg">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#C9A227] hover:bg-[#D4B870]">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-[#C9A227] text-[#C9A227]">
            <Link to="/" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

