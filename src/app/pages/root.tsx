import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ErrorBoundary } from "../components/ui/error-boundary";
import { WhatsAppButton } from "../components/whatsapp-button";
import { ScrollToTop } from "../components/scroll-to-top";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Skip to main content — WCAG 2.1 AA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C9A227] focus:text-[#2B2B2B] focus:rounded-lg focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollRestoration />
      <Navbar />
      <main id="main-content" className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<div className="flex items-center justify-center h-screen text-[#1A3A6C]">Loading...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

