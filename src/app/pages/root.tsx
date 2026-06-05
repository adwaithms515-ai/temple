import { Suspense } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ErrorBoundary } from "../components/ui/error-boundary";
import { WhatsAppButton } from "../components/whatsapp-button";
import { ScrollToTop } from "../components/scroll-to-top";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
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

