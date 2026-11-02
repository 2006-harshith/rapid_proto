import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Mainpage from "./pages/Mainpage.jsx";
import Sla from "./pages/Sla.jsx";
import Sls from "./pages/Sls.jsx";
import Mjf from "./pages/Mjf.jsx";
import Srm from "./pages/Srm.jsx";
import Contact from "./pages/Contact.jsx";
import Comingsoon from "./pages/Comingsoon.jsx";

function LayoutWrapper() {
  return (
    <div className="site-layout">
      {/* Permanent Header */}
      <Navbar />

      {/* Dynamic Center Zone */}
      <main>
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
      { path: "services/sla", element: <Sla /> },
      { path: "services/sls", element: <Sls /> },
      { path: "services/mjf", element: <Mjf /> },
      { path: "services/srm", element: <Srm /> },
      { path: "contact", element: <Contact /> },
      // Any page not built yet shows the Coming Soon page
      { path: "*", element: <Comingsoon /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
