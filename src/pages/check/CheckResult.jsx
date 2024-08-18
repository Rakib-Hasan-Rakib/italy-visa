import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiH1 } from "react-icons/ri";
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import Box from "../../components/Box";

const CheckResult = () => {
  const { passportNum } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/check/${passportNum}`)
      .then(function (response) {
        setResult(response.data);
      })
      .catch(function (error) {
        // handle error
        toast.error(error);
      });
  }, []);

  let {
    imageUrl,
    surname,
    givenName,
    date,
    gender,
    city,
    identy,
    nationality,
    nid,
    companyName,
    jobTitle,
    dutyDuration,
    salary,
    issuedCountry,
    phoneNum,
    email,
    note,
  } = result;
  console.log(email);

  return (
    <>
      {result.length < 1 && (
        <div>
          <h1 className="w-full h-[90vh] flex justify-center items-center text-xl md:text-2xl lg:text-4xl text-red-600 capitalize font-semibold">
            you don't have any information here
          </h1>
        </div>
      )}
      <div>
        <SectionTitle>Your visa application</SectionTitle>
        <Box>
          {/* <h3 className="text-center text-white font-semibold  bg-green-500 py-2 rounded-md">
                Personal details
              </h3> */}
          <table className="min-w-full bg-white border border-gray-300 text-lg">
            <tbody>
              <tr>
                <td
                  colSpan={4}
                  className="text-center font-semibold bg-green-400 py-1"
                >
                  Personal details
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Surname
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {surname}
                </td>
                <td
                  rowSpan="2"
                  colSpan="2"
                  className="px-6 py-2 border-b text-sm text-gray-700 text-right align-middle"
                >
                  <img
                    src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920"
                    alt="profile"
                    className="w-20 h-20 inline-block"
                  />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Given Name
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {givenName}
                </td>
              </tr>

              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Gender
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {gender}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Date of Birth
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {date}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Place of Birth
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {city}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Visible Identyfication Marks
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {identy}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Nationality
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {nationality}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  National ID
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {nid}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className="text-center font-semibold bg-green-400 py-1"
                >
                  Company details
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Company Name
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {companyName}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Job Title
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {jobTitle}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Duty Duration
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {dutyDuration}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Salary
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {salary}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className="text-center font-semibold bg-green-400 py-1"
                >
                  Passport Details
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Passport Number
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {passportNum}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Issued Country
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {issuedCountry}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className="text-center font-semibold bg-green-400 py-1"
                >
                  Applicant's Contact Details
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Phone
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {phoneNum}
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Email
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {email}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                  Note
                </td>
                <td className="px-6 py-2 border-b text-sm text-gray-700">
                  {note}
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </div>
    </>
  );
};
export default CheckResult;
