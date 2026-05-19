import { createBrowserRouter } from "react-router";
import { Root } from "./pages/root";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { DeitiesPage } from "./pages/deities";
import { PoojaBookingPage } from "./pages/pooja-booking";
import { DarshanBookingPage } from "./pages/darshan-booking";
import { FestivalsPage } from "./pages/festivals";
import { RitualsPage } from "./pages/rituals";
import { DonationsPage } from "./pages/donations";
import { GalleryPage } from "./pages/gallery";
import { LiveStreamingPage } from "./pages/live-streaming";
import { PrasadamStorePage } from "./pages/prasadam-store";
import { PilgrimInfoPage } from "./pages/pilgrim-info";
import { BlogPage } from "./pages/blog";
import { TestimonialsPage } from "./pages/testimonials";
import { ContactPage } from "./pages/contact";
import { AdminDashboardPage } from "./pages/admin-dashboard";
import { NotFoundPage } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "deities", Component: DeitiesPage },
      { path: "pooja-booking", Component: PoojaBookingPage },
      { path: "darshan-booking", Component: DarshanBookingPage },
      { path: "festivals", Component: FestivalsPage },
      { path: "rituals", Component: RitualsPage },
      { path: "donations", Component: DonationsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "live-streaming", Component: LiveStreamingPage },
      { path: "prasadam-store", Component: PrasadamStorePage },
      { path: "pilgrim-info", Component: PilgrimInfoPage },
      { path: "blog", Component: BlogPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "contact", Component: ContactPage },
      { path: "admin", Component: AdminDashboardPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
