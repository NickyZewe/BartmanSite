import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PortfolioPage from "./pages/PortfolioPage";
import ClosingTimePage from "./pages/ClosingTimePage";
import AboutPage from "./pages/AboutPage";
import ArizBayProdPage from "./pages/ArizBayProdPage";
import SuccessPage from "./pages/SuccessPage";

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
      { path: "/contact", element: <ContactPage /> },
      { path: "/success", element: <SuccessPage /> },
    ],
  },
]);

export default router;
