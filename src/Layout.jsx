import { Outlet } from "react-router-dom";
import Home from "./pages/home/Home";

const Layout = () => {
  return (
    <>
          <Home />
          <Outlet/>
    </>
  );
};
export default Layout;
