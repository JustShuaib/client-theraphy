import plusImg from "./../../../../assets/plus-square-svgrepo-com.svg";
// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TitleInput from "../../../../components/titleInput/TitleInput";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const [themaName, setThemaName] = useState("");
  /* 🔥🔥 THIS WAS JUST ADDED TEMPORARILY TO PASS THE CHECK, LOOK INTO IT LATER🔥🔥 */
  const [nameTaken, setNameTaken] = useState(false);

  // const { data, error } = useQuery({
  //   queryKey: ["pages"],
  //   queryFn: async () => {
  //     const response = await fetch("/api/fetch_theme_pages", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ theme_name: themaName }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     console.log(`this is the fetch template response`);
  //     console.log(response);
  //     const jsonResponse = await response.json();
  //     const templates = jsonResponse.pages;
  //     console.log(
  //       `this is the returned templates data: should be a list of strings`
  //     );
  //     console.log(templates);
  //     return templates;
  //   },
  // });
  // if (error) console.log(error);

  // const handleClick = async (themaName) => {
  //     const response = await savetheme.mutate({ 'theme_name': themaName })
  //     console.log('this is the response from save theme')
  //     console.log(response)
  //     response === true ? navigate('/admin/thema/bladzijde/create', { state: themaName }) : console.log('handleclick failed')
  // }

  const tapCheck = () => {
    return !nameTaken && { scale: 0.95 };
  };
  const hoverCheck = () => {
    return !nameTaken && { scale: 1.05 };
  };
  console.log({ nameTaken });
  return (
    <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
      <div className="pb-12 ">
        <TitleInput
          nameTaken={nameTaken}
          setNameTaken={setNameTaken}
          title={themaName}
          setTitle={setThemaName}
          endpoint="/api/check_theme_existence"
          placeholder="Nieuwe Thema"
        />
        {/* <h1 className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}>bladzijde</h1> */}
      </div>
      <div className="grid grid-cols-3 gap-20">
        <motion.button
          whileTap={tapCheck}
          whileHover={hoverCheck}
          className={`flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br ${
            !nameTaken
              ? "from-purple-400 to-purple-700"
              : "from-gray-400 to-gray-700"
          } `}
        >
          <motion.button
            disabled={nameTaken}
            onClick={() => navigate("/admin/thema/bladzijde/create")}
            // onClick={() => { console.log('theme') }}
            // to="/admin/thema/bladzijde/create"
          >
            <span aria-disabled={nameTaken} className="flex flex-row">
              <span className="inline-block p-6 text-2xl font-semibold text-center">
                Nieuwe pagina toevoegen{" "}
                <img
                  className="inline-block w-10 h-10"
                  src={plusImg}
                  alt="plus icon"
                />
              </span>
            </span>
          </motion.button>
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
