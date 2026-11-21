import { useLayoutEffect, useRef } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Mainpage from "./pages/Mainpage.jsx";
import ServicePage from "./pages/services/ServicePage.jsx";
import Contact from "./pages/Contact.jsx";
import Comingsoon from "./pages/Comingsoon.jsx";
import { services } from "./data/services/index.js";

// The router doesn't reset scroll on its own. Clicking a link opens the new page at
// its top; clicking a link to the page you're on (e.g. Home on the home page) glides
// back up. Back/forward (POP) and #hash links keep the browser's own scrolling.
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const lastPathname = useRef(pathname);

  useLayoutEffect(() => {
    const samePage = lastPathname.current === pathname;
    lastPathname.current = pathname;
    if (navigationType === "POP" || hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: samePage ? "smooth" : "instant" });
  }, [pathname, hash, key, navigationType]);

  return null;
}

function LayoutWrapper() {
  return (
    // Sticky footer: main grows to push the footer to the bottom
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />

      {/* Permanent Header */}
      <Navbar />

      {/* Dynamic Center Zone */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Permanent Footer */}
      <Footer />
    </div>
  );
}

// Map URLs to components
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      { index: true, element: <Mainpage /> },
      // One page per service in the service catalogue (/services/<code>)
      ...services.map(({ code, route }) => ({
        path: route.slice(1),
        element: <ServicePage code={code} />,
      })),
      { path: "contact", element: <Contact /> },
      // Any page not built yet shows the Coming Soon page
      { path: "*", element: <Comingsoon /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
