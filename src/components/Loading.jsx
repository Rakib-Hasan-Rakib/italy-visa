import { ImSpinner4 } from "react-icons/im";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80vh]">
        <ImSpinner4 size={40} className="animate-spin text-[#7cd162] w-full" />
      </div>
    </>
  );
};
export default Loading;
