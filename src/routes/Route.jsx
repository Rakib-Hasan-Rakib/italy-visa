import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Layout from "../Layout";
import Register from "../pages/register/Register";
import Upload from "../pages/upload/Upload";
import Check from "../pages/check/Check";
import CheckResult from "../pages/check/CheckResult";
import Info from "../pages/about/Info";
import Dashboard from "../pages/dashboard/Dashboard";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/info", element: <Info /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/uploadData",
        element: <Upload />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
