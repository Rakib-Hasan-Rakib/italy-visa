import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner4 } from "react-icons/im";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateResult = ({ passNum }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const pdf9 = e.target.pdf9.files[0];
    const pdf10 = e.target.pdf10.files[0];

    const formData = new FormData();
    formData.append("pdf9", pdf9);
    formData.append("pdf10", pdf10);
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
      {user?.email == "haquemdnurul108@gmail.com" && (
        <form onSubmit={handleFormSubmit}>
          <h3 className="gradient-text text-xl md:text-2xl lg:text-3xl text-center font-semibold mt-5">
            Add more files
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="file"
              name="pdf9"
              accept="image/*"
              className="input-box"
            />
            <input
              type="file"
              name="pdf10"
              accept="image/*"
              className="input-box"
            />
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
      )}
    </>
  );
};
export default UpdateResult;
