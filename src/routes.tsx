import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PortfolioPage from "./pages/PortfolioPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/shop", element: <PortfolioPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
