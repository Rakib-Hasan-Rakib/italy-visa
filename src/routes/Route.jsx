import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Layout from "../Layout";
import Register from "../pages/register/Register";
import Upload from "../pages/upload/Upload";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/uploadData",
        element: <Upload />,
      },
    ],
  },
]);

export default Route;
