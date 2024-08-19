import { Outlet } from "react-router-dom";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div className="text-white z-10">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
