import { createBrowserRouter } from "react-router";
import { Root } from "./pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, lazy: () => import("./pages/home").then((m) => ({ Component: m.HomePage })) },
      { path: "about", lazy: () => import("./pages/about").then((m) => ({ Component: m.AboutPage })) },
      { path: "deities", lazy: () => import("./pages/deities").then((m) => ({ Component: m.DeitiesPage })) },
      { path: "pooja-booking", lazy: () => import("./pages/pooja-booking").then((m) => ({ Component: m.PoojaBookingPage })) },
      { path: "darshan-booking", lazy: () => import("./pages/darshan-booking").then((m) => ({ Component: m.DarshanBookingPage })) },
      { path: "festivals", lazy: () => import("./pages/festivals").then((m) => ({ Component: m.FestivalsPage })) },
      { path: "rituals", lazy: () => import("./pages/rituals").then((m) => ({ Component: m.RitualsPage })) },
      { path: "donations", lazy: () => import("./pages/donations").then((m) => ({ Component: m.DonationsPage })) },
      { path: "gallery", lazy: () => import("./pages/gallery").then((m) => ({ Component: m.GalleryPage })) },
      { path: "live-streaming", lazy: () => import("./pages/live-streaming").then((m) => ({ Component: m.LiveStreamingPage })) },
      { path: "prasadam-store", lazy: () => import("./pages/prasadam-store").then((m) => ({ Component: m.PrasadamStorePage })) },
      { path: "pilgrim-info", lazy: () => import("./pages/pilgrim-info").then((m) => ({ Component: m.PilgrimInfoPage })) },
      { path: "blog", lazy: () => import("./pages/blog").then((m) => ({ Component: m.BlogPage })) },
      { path: "testimonials", lazy: () => import("./pages/testimonials").then((m) => ({ Component: m.TestimonialsPage })) },
      { path: "contact", lazy: () => import("./pages/contact").then((m) => ({ Component: m.ContactPage })) },
      { path: "admin", lazy: () => import("./pages/admin-dashboard").then((m) => ({ Component: m.AdminDashboardPage })) },
      { path: "*", lazy: () => import("./pages/not-found").then((m) => ({ Component: m.NotFoundPage })) },
    ],
  },
]);

