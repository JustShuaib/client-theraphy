import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import { Button, Skeleton } from "antd";
import { MdDelete } from "react-icons/md";
import { LuPlusSquare } from "react-icons/lu";
import {
  useDeleteTheme,
  useFetchThemePages,
} from "../../../services/admin/admin.api";

const ViewTheme = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useFetchThemePages(id);
  const { isPending, mutate: deleteTheme } = useDeleteTheme(id);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;
  return (
    <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
      <div className="flex justify-between pb-12 pr-20">
        <h1
          className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}
        >
          {data.themeName || <Skeleton active />}
        </h1>

        <Button
          loading={isPending}
          icon={<MdDelete size={24} className="-mb-1" />}
          onClick={deleteTheme}
          type="primary"
          size="large"
          className="bg-red-500 h-[2.6rem] hover:scale-105 duration-200 hover:!bg-red-600 font-open-sans text-base"
        >
          Delete theme
        </Button>
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
              <LuPlusSquare className="inline-block w-10 h-10" />
            </div>
          </div>
        </motion.button>

        {data.pages?.length > 0 &&
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
