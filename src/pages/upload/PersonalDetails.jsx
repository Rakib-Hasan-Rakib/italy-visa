import axios from "axios";
import Box from "../../components/Box";
import SectionTitle from "../../components/SectionTitle";
import toast from "react-hot-toast";
import { useState } from "react";
import { ImSpinner4 } from "react-icons/im";
import emailjs from "emailjs-com";

const PersonalDetails = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target;
    const surname = data.surname.value;
    const givenName = data.givenName.value;
    const status = data.status.value;
    const date = data.date.value;
    const passportNum = data.passportNum.value;
    const email = data.email.value;
    const message = data.message.value;
    const image = data.image.files[0];
    const pdf1 = data.pdf1.files[0];
    const pdf2 = data.pdf2.files[0];
    const pdf3 = data.pdf3.files[0];
    const pdf4 = data.pdf4.files[0];
    const pdf5 = data.pdf5.files[0];
    const pdf6 = data.pdf6.files[0];

    const formData = new FormData();
    formData.append("image", image);
    formData.append("pdf1", pdf1);
    formData.append("pdf2", pdf2);
    formData.append("pdf3", pdf3);
    formData.append("pdf4", pdf4);
    formData.append("pdf5", pdf5);
    formData.append("pdf6", pdf6);
    formData.append("surname", surname);
    formData.append("givenName", givenName);
    formData.append("status", status);
    formData.append("date", date);
    formData.append("passportNum", passportNum);
    formData.append("email", email);
    formData.append("message", message);

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.insertedId) {
        toast.success("Information uploaded successfully!");
        emailjs
          .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
              to_email: email,
              givenName,
              surname,
              passportNum,
              status,
              message,
            },
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result);
              toast.success(`Email sent to ${email}`);
            },
            (error) => {
              console.log(error);
              toast.error(`Failed to send email due to ${error?.text}`);
            }
          );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };
  let required = <span className="text-red-600">*</span>;

  return (
    <>
      <Box>
        <SectionTitle>Upload clients visa information</SectionTitle>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-4">
            <div>
              <label className="lg:text-lg capitalize">
                Select image{required}
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                placeholder="select image"
                className="input-box"
              />
            </div>
            <div>
              <label className="lg:text-lg capitalize">surname{required}</label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname *"
                required
                className="input-box"
              />
            </div>
            <div>
              <label className="lg:text-lg capitalize">
                given name{required}
              </label>
              <input
                type="text"
                name="givenName"
                id="givenName"
                placeholder="Given name *"
                required
                className="input-box"
              />
            </div>

            <div>
              <label className="lg:text-lg capitalize">
                date of birth{required}
              </label>
              <input
                aria-label="Date"
                type="date"
                name="date"
                required
                className="input-box"
              />
            </div>

            <div>
              <label className="lg:text-lg capitalize">
                passport number{required}
              </label>
              <input
                type="text"
                name="passportNum"
                id="passportNum"
                placeholder="Passport number *"
                required
                className="input-box"
              />
            </div>

            <div>
              <label className="lg:text-lg capitalize">email{required}</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address *"
                required
                className="input-box"
              />
            </div>

            <div>
              <label className="lg:text-lg capitalize">
                visa status{required}
              </label>
              <select name="status" id="status" className="input-box" required>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-4">
            <div>
              <label className="lg:text-lg capitalize">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows="5"
                className="border border-[#09e5e5] w-full px-2 py-1 focus:outline-none text-black"
              ></textarea>
            </div>
          </div>

          <h3 className="gradient-text text-xl md:text-2xl lg:text-3xl text-center font-semibold mt-5">
            Attachments
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-4">
            <input
              type="file"
              name="pdf1"
              accept="image/*"
              className="input-box"
            />
            <input
              type="file"
              name="pdf2"
              accept="image/*"
              className="input-box"
            />
            <input
              type="file"
              name="pdf3"
              accept="image/*"
              className="input-box"
            />
            <input
              type="file"
              name="pdf4"
              accept="image/*"
              className="input-box"
            />
            <input
              type="file"
              name="pdf5"
              accept="image/*"
              className="input-box"
            />
            <input
              type="file"
              name="pdf6"
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
                <input type="submit" value="Upload Now" />
              </button>
            )}
          </div>
        </form>
      </Box>
    </>
  );
};
export default PersonalDetails;
