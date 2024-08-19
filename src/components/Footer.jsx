import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Box from "./Box";

const Footer = () => {
  return (
    <>
      <div className="py-2 md:py-4 bg-slate-900 mt-32 text-white">
        <Box>
          <small className="flex flex-col items-center justify-center md:flex-row md:gap-6">
            <span>copyright Canada Visa</span>
            <span>hello@world.com</span>
          </small>
        </Box>
      </div>
    </>
  );
};
export default Footer;
