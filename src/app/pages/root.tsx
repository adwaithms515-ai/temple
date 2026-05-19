import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
