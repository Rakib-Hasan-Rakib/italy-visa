import { Outlet } from "react-router-dom";
import Box from "./components/Box";
// import Home from "./pages/home/Home";
// import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};
export default Layout;
