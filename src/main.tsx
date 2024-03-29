import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import CEOMessage from "./pages/CEOMessage";
import Contact from "./pages/Contact";
import Notice from "./pages/Notice";

const router = createBrowserRouter([
  {
    path: "/tory-electronics/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productName",
        element: <Product />,
      },
      {
        path: "ceo-message",
        element: <CEOMessage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
