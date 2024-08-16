import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ children }) => {
  return (
    <Fade delay={100}>
      <h1 className="gradient-text text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-8 mb-4 lg:mt-16 lg:mb-8">
        {children}
      </h1>
    </Fade>
  );
};
export default SectionTitle;
