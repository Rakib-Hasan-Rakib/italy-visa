import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner4 } from "react-icons/im";

const UpdateResult = ({ passNum }) => {
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const pdf9 = e.target.pdf9.files[0];
    const pdf10 = e.target.pdf10.files[0];
    const pdf11 = e.target.pdf11.files[0];
    const pdf12 = e.target.pdf12.files[0];

    const formData = new FormData();
    formData.append("pdf9", pdf9);
    formData.append("pdf10", pdf10);
    formData.append("pdf11", pdf11);
    formData.append("pdf12", pdf12);
    try {
      setLoading(true);
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/upload/${passNum}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.data.modifiedCount) {
        setLoading(false);
        toast.success("Information uploaded successfully!");
      } else if (response.data.message) {
        setLoading(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form.");
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3 className="gradient-text text-xl md:text-2xl lg:text-3xl text-center font-semibold mt-5">
          Add more files
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input type="file" name="pdf9" accept=".pdf" className="input-box" />
          <input type="file" name="pdf10" accept=".pdf" className="input-box" />
          <input type="file" name="pdf11" accept=".pdf" className="input-box" />
          <input type="file" name="pdf12" accept=".pdf" className="input-box" />
        </div>
        <div className="flex justify-center items-center">
          {loading ? (
            <button className="submit-btn">
              <ImSpinner4 size={24} className="animate-spin" />
            </button>
          ) : (
            <button className="submit-btn">
              <input type="submit" value="Add Now" />
            </button>
          )}
        </div>
      </form>
    </>
  );
};
export default UpdateResult;
