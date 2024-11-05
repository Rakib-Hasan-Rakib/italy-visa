import { useEffect, useState } from "react";
import Box from "../../components/Box";
import axios from "axios";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";
import SectionTitle from "../../components/SectionTitle";

export default function Dashboard() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/allDocs`)
      .then((response) => {
        setAllData(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.message);
        setLoading(false);
      });
  }, []);

  const handleDeleteData = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/deleteData/${id}`)
      .then((response) => {
        if (response?.status == 200) {
          toast.success(`data deleted successfully`);
          const remaining = allData?.filter((data) => data?._id != id);
          setAllData(remaining);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <SectionTitle>all applicant's</SectionTitle>
          <table
            border={0}
            className="min-w-full bg-white text-lg mt-10 border-0 text-center space-y-6"
          >
            <thead className="mb-12">
              <tr className="bg-green-300 py-4 font-semibold">
                <td>Photo</td>
                <td className="py-2">Passport Number</td>
                <td>Actions</td>
              </tr>
            </thead>
            {allData?.map((data) => (
              <tbody key={data?._id} className="">
                <tr className="hover:bg-slate-100">
                  <td>
                    <img
                      src={
                        data?.finalCloudDoc
                          ? data?.finalCloudDoc[0]?.fileUrl
                          : null
                      }
                      alt="profile"
                      className="w-16 md:w-20 h-16 md:h-20 inline-block rounded-md object-cover object-center my-1"
                    />
                  </td>
                  <td>{data?.passportNum}</td>
                  <td className="">
                    <button
                      onClick={() => handleDeleteData(data?._id)}
                      className="bg-red-600 text-white px-4 lg:px-8 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </Box>
      )}
    </div>
  );
}
