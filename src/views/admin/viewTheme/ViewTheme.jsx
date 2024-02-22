import plusImg from "./../../../assets/plus-square-svgrepo-com.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import { Button } from "antd";
import { MdDelete } from "react-icons/md";

const ViewTheme = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/delete_theme", { id });
      const status = await response.data;
      console.log({ status });
      return status.success;
    },
    onSuccess: () => {
      console.log("on success works");
      navigate("/admin/thema");
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["thema"],
    queryFn: async () => {
      const response = await fetch("/api/fetch_theme_pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();
      return {
        themeName: jsonResponse.theme_name,
        pages: jsonResponse.pages,
      };
    },
  });
  console.log({ data });

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;
  return (
    <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
      <div className="flex flex-row pb-12">
        <h1
          className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}
        >
          {data?.themeName}
        </h1>

        <Button
          loading={deleteMutation.isPending}
          icon={<MdDelete />}
          onClick={() => deleteMutation.mutate()}
          type="primary"
          danger
        >
          Delete theme
        </Button>

        {/* <motion.button className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-red-500 border rounded-lg place-self-end w-fit">
          DELETE THEME
        </motion.button> */}
      </div>
      <div className="grid grid-cols-3 gap-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/admin/thema/bladzijde/create");
          }}
          className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700"
        >
          <div className="flex flex-row">
            <div className="inline-block p-6 text-2xl font-semibold text-center">
              Nieuwe pagina toevoegen{" "}
              <img
                className="inline-block w-10 h-10"
                src={plusImg}
                alt="plus icon"
              />
            </div>
          </div>
        </motion.button>

        {data.pages?.length > 0 &&
          // ? (
          //   <div className="flex flex-col gap-y-2">
          //     <TiInfoOutline />
          //     <p className="text-lg text-center">
          //       {data.themeName} currently does not have a page.
          //     </p>
          //   </div>
          // ) :
          data.pages?.map((page) => (
            <motion.button
              key={page.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/admin/thema/bladzijde/create");
              }}
              className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700"
            >
              <p className="p-6 text-2xl font-semibold text-center">
                {page.page_name}
              </p>
            </motion.button>
          ))}
      </div>
    </div>
  );
};

export default ViewTheme;
