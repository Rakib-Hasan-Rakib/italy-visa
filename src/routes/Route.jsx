import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Route;
