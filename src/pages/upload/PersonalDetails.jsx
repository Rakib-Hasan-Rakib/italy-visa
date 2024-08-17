import axios from "axios";
import Box from "../../components/Box";
import SectionTitle from "../../components/SectionTitle";
import toast from "react-hot-toast";

const PersonalDetails = () => {
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target;
    const surname = data.surname.value;
    const givenName = data.givenName.value;
    const gender = data.gender.value;
    const date = data.date.value;
    const city = data.city.value;
    const identy = data.identy.value;
    const nationality = data.nationality.value;
    const nid = data.nid.value;
    const companyName = data.companyName.value;
    const jobTitle = data.jobTitle.value;
    const dutyDuration = data.dutyDuration.value;
    const salary = data.salary.value;
    const passportNum = data.passportNum.value;
    const issuedCountry = data.issuedCountry.value;
    const phoneNum = data.phoneNum.value;
    const email = data.email.value;
    const note = data.note.value;
    const image = data.image.files[0];
    const pdf1 = data.pdf1.files[0];
    const pdf2 = data.pdf2.files[0];
    const pdf3 = data.pdf3.files[0];
    const pdf4 = data.pdf4.files[0];
    const pdf5 = data.pdf5.files[0];
    const pdf6 = data.pdf6.files[0];
    const pdf7 = data.pdf7.files[0];
    const pdf8 = data.pdf8.files[0];

    const formData = new FormData();
    formData.append("image", image);
    formData.append("pdf1", pdf1);
    formData.append("pdf2", pdf2);
    formData.append("pdf3", pdf3);
    formData.append("pdf4", pdf4);
    formData.append("pdf5", pdf5);
    formData.append("pdf6", pdf6);
    formData.append("pdf7", pdf7);
    formData.append("pdf8", pdf8);
    formData.append("surname", surname);
    formData.append("givenName", givenName);
    formData.append("gender", gender);
    formData.append("date", date);
    formData.append("city", city);
    formData.append("identy", identy);
    formData.append("nationality", nationality);
    formData.append("nid", nid);
    formData.append("companyName", companyName);
    formData.append("jobTitle", jobTitle);
    formData.append("dutyDuration", dutyDuration);
    formData.append("salary", salary);
    formData.append("passportNum", passportNum);
    formData.append("issuedCountry", issuedCountry);
    formData.append("phoneNum", phoneNum);
    formData.append("email", email);
    formData.append("note", note);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Information uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form.");
    }
  };

  return (
    <>
      <Box>
        <SectionTitle>Upload clients visa information</SectionTitle>

        <form action="" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-4">
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
              placeholder="select image"
              className="input-box"
            />
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="givenName"
              id="givenName"
              placeholder="Given name *"
              required
              className="input-box"
            />
            <select name="gender" id="gender" className="input-box" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              aria-label="Date"
              type="date"
              name="date"
              required
              className="input-box"
            />
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City name *"
              required
              className="input-box"
            />
            <input
              type="number"
              name="identy"
              id="identy"
              placeholder="Identification number *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="nationality"
              id="nationality"
              placeholder="Nationality *"
              required
              className="input-box"
            />
            <input
              type="number"
              name="nid"
              id="nid"
              placeholder="National ID card *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company name *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job title *"
              required
              className="input-box"
            />
            <input
              type="number"
              name="dutyDuration"
              id="dutyDuration"
              placeholder="Duty duration *"
              required
              className="input-box"
            />
            <input
              type="number"
              name="salary"
              id="salary"
              placeholder="Salary *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="passportNum"
              id="passportNum"
              placeholder="Passport number *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="issuedCountry"
              id="issuedCountry"
              placeholder="Passport issued country *"
              required
              className="input-box"
            />
            <input
              type="number"
              name="phoneNum"
              id="phoneNum"
              placeholder="Phone number *"
              required
              className="input-box"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address *"
              required
              className="input-box"
            />
            <input
              type="text"
              name="note"
              id="note"
              placeholder="Note (if any)"
              className="input-box"
            />
          </div>

          <h3 className="gradient-text text-xl md:text-2xl lg:text-3xl text-center font-semibold mt-5">
            Attachments
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-4">
            <input
              type="file"
              name="pdf1"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf2"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf3"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf4"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf5"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf6"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf7"
              accept=".pdf"
              className="input-box"
            />
            <input
              type="file"
              name="pdf8"
              accept=".pdf"
              className="input-box"
            />
          </div>

          <div className="flex justify-center items-center">
            <input type="submit" value="Upload Now" className="submit-btn" />
          </div>
        </form>
      </Box>
    </>
  );
};
export default PersonalDetails;
