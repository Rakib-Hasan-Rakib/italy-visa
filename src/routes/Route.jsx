import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Layout from "../Layout";
import Register from "../pages/register/Register";
import Upload from "../pages/upload/Upload";
import Check from "../pages/check/Check";
import CheckResult from "../pages/check/CheckResult";

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
      {
        path: "/check",
        element: <Check />,
      },
      {
        path: "/check/:passportNum",
        element: <CheckResult />,
      },
    ],
  },
]);

export default Route;
