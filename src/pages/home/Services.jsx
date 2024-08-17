import { FaUniversity, FaBriefcase } from "react-icons/fa";
import {
  MdOutlineDocumentScanner,
  MdOutlineCastForEducation,
  MdOutlineHealthAndSafety,
  MdOutlineTravelExplore,
} from "react-icons/md";

import Card from "../../components/card/Card";
import SectionTitle from "../../components/SectionTitle";

const Services = () => {
  return (
    <>
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-6">
        <Card
          heading="University Selection"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam commodi soluta amet quidem accusantium maxime aut aspernatur quibusdam neque."
        >
          <FaUniversity className="text-3xl lg:text-4xl flex justify-center items-center" />
        </Card>
        <Card
          heading="Visa Assistance"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam commodi soluta amet quidem accusantium maxime aut aspernatur quibusdam neque."
        >
          <MdOutlineDocumentScanner className="text-3xl lg:text-4xl flex justify-center items-center" />
        </Card>
        <Card
          heading="Coaching Centers"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam commodi soluta amet quidem accusantium maxime aut aspernatur quibusdam neque."
        >
          <MdOutlineCastForEducation className="text-3xl lg:text-4xl flex justify-center items-center" />
        </Card>
        <Card
          heading="Overseas Internship"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam commodi soluta amet quidem accusantium maxime aut aspernatur quibusdam neque."
        >
          <FaBriefcase className="text-3xl lg:text-4xl flex justify-center items-center" />
        </Card>
        <Card
          heading="Health Insurance"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam commodi soluta amet quidem accusantium maxime aut aspernatur quibusdam neque."
        >
          <MdOutlineHealthAndSafety className="text-3xl lg:text-4xl flex justify-center items-center" />
        </Card>
        <Card
          heading="Travel Assistance"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam commodi soluta amet quidem accusantium maxime aut aspernatur quibusdam neque."
        >
          <MdOutlineTravelExplore className="text-3xl lg:text-4xl flex justify-center items-center" />
        </Card>
      </div>
    </>
  );
};
export default Services;
