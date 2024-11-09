import axios from "axios";
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Check = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const passportNum = e.target.passport.value;
    const dob = e.target.dob.value;
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/check/${passportNum}`)
      .then((res) => {
        if (res?.data?.date == dob) {
          navigate(`/check/${passportNum}`, { replace: true });
        } else {
          toast.error("Your date of Birth didn't match");
        }
      })
      .catch((err) => toast.error(err?.message));
  };

  return (
    <>
      <SectionTitle>Check your visa application</SectionTitle>
      <form
        onSubmit={handleSubmit}
        className=" bg-black bg-opacity-50 text-white shadow-lg backdrop-blur-[1px] w-4/5 lg:w-3/5 xl:w-2/5 mx-auto px-8 py-10 space-y-3 rounded-lg"
      >
        <div>
          <label htmlFor="" className="lg:text-lg tracking-wide">
            Passport No:
          </label>
          <input
            type="text"
            name="passport"
            id="passport"
            placeholder="Enter your passport number"
            required
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="" className="lg:text-lg tracking-wide">
            Nationality:
          </label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            placeholder="Enter your nationality"
            required
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="" className="lg:text-lg tracking-wide">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            required
            className="input-box"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            value="Check"
            className="submit-btn text-black"
          />
        </div>
      </form>
    </>
  );
};
export default Check;
