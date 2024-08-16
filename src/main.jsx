import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Route from "./routes/Route.jsx";
import Layout from "./Layout.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={Route}>
      <Layout />
    </RouterProvider>
  
);
