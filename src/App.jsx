import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Mainpage from "./pages/Mainpage.jsx";
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
      // Any page not built yet shows the Coming Soon page
      { path: "*", element: <Comingsoon /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
