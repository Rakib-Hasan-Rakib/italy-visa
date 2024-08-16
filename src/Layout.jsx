import { Outlet } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
          {/* <Navbar /> */}
          <Outlet/>
    </>
  );
};
export default Layout;
