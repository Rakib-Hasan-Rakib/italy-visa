import Box from "../../components/Box";
import Navbar from "../../components/navbar/Navbar";
import Banner from "./banner/Banner";
import Clients from "./clients/Clients";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="banner-bg relative">
        <div className="text-white z-10 absolute">
          <Navbar />
        </div>
        <Banner />
      </div>
      <Box>
        <Services />
        <Clients/>
      </Box>
    </>
  );
};
export default Home;
