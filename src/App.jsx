// // import Comingsoon from "./components/Comingsoon.jsx";
// import Mainpage from "./components/Mainpage.jsx";

// function App() {
//   return <Mainpage />;
// }

// export default App;

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Mainpage from "./components/Mainpage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Comingsoon from "./components/Comingsoon.jsx";

function LayoutWrapper() {
  return (
    <div className="site-layout">
      {/* Permanent Header */}
      <Navbar />

      {/* Dynamic Center Zone */}
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>

      {/* Permanent Footer */}
      <Footer />
    </div>
  );
}

// 2. Map URLs to your components
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />, // Loads the frame
    children: [
      { index: true, element: <Mainpage /> }, // Goes to <Outlet /> when URL is /
    ],
  },
]);

// 3. Provide the router layout to the application
export default function App() {
  return <RouterProvider router={router} />;
  // return <Comingsoon />;
}
