import "./App.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import Home from "./components/homepage/Home.tsx";
import ErrorPage from "./components/misc/ErrorPage.tsx";
import About from "./components/about/About.tsx";
import Contact from "./components/contact/Contact.tsx";
import { CartProvider } from "./components/cart/CartProvider.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F1F1F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#868584',
      contrastText: '#000',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
