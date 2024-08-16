import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Route from "./routes/Route.jsx";
import Layout from "./Layout.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={Route}></RouterProvider>
    <Toaster position="top-center" />
  </AuthProvider>
);
