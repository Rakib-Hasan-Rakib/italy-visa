import { FaQuoteRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const ClientCard = ({ image }) => {
  return (
    <>
      <div
        className="border border-gray-400 py-8 px-6 rounded-lg space-y-8"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-2 xl:gap-4">
            <img src={image} alt="client photo" className="w-32 rounded-lg"/>
            <div>
              <h4 className="text-xl">Jhon Doe</h4>
              <p>
                <small>Project Manager</small>
              </p>
            </div>
          </div>
          <FaQuoteRight size={24} />
        </div>
        <div className="flex items-center gap-2 text-yellow-500">
          <IoStar size={22} />
          <IoStar size={22} />
          <IoStar size={22} />
          <IoStar size={22} />
          <IoStar size={22} />
        </div>

        <p className="my-8">
          Neque masa lectus erat viverra nisl mauris massa diam. Vitae leo orci
          id odio porta malesuada magna.
        </p>
      </div>
    </>
  );
};
export default ClientCard;
