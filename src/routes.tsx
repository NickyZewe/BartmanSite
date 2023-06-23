import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PortfolioPage from "./pages/PortfolioPage";
import ClosingTimePage from "./pages/ClosingTimePage";
import AboutPage from "./pages/ABoutPage";
import ArizBayProdPage from "./pages/ArizBayProdPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/closingtime", element: <ClosingTimePage /> },
      { path: "/arizonabayproductions", element: <ArizBayProdPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
