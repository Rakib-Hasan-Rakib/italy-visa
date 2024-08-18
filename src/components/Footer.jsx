import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Box from "./Box";

const Footer = () => {
  return (
    <>
      <div className="py-2 md:py-4 bg-slate-900 mt-32 text-white">
        <Box>
          <div className="flex justify-between items-center">
            <small className="flex flex-col md:flex-row md:gap-6">
              <span>copyright Italy Visa</span>
              <span>hello@world.com</span>
            </small>
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <a
                href="https://www.facebook.com/rk.rakib.180625"
                target="_blank"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Footer;
