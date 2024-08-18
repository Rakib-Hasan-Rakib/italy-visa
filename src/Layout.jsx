import { Outlet } from "react-router-dom";
import Box from "./components/Box";
import Footer from "./components/Footer";
// import Home from "./pages/home/Home";
// import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
