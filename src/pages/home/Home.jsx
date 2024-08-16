import Box from "../../components/Box";
import Navbar from "../../components/navbar/Navbar";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <>
      <div className="banner-bg relative">
        <div className="text-white z-10 absolute">
          <Navbar />
        </div>
        <Banner />
      </div>
    </>
  );
};
export default Home;
