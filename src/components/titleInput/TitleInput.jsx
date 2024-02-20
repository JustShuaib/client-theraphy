/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
// import editImg from '../../assets/edit-3-svgrepo-com.svg'
import saveImg from "../../assets/save-svgrepo-com.svg";
import axios from "axios";
import { motion } from "framer-motion";

const TitleInput = ({
  title,
  setTitle,
  endpoint,
  placeholder,
  nameTaken,
  setNameTaken,
}) => {
  const [titleColor, setTitleColor] = useState();
  const [prevText, setPrevText] = useState("");

  const inputRef = useRef(null);

  const checkTitle = useMutation({
    mutationFn: async (title) => {
      const response = await axios.post(endpoint, title);
      const result = await response.json();
      return result.exists;
    },
  });

  const saveTheme = useMutation({
    mutationFn: async (themaName) => {
      const response = axios.post("/api/save_theme", themaName);
      return response.success;
    },
  });

  useEffect(() => {
    title !== prevText &&
      (checkTitle.mutate({ theme_name: title }),
      checkTitle.isError && console.log(checkTitle.error.message),
      checkTitle.data && setNameTaken(!nameTaken),
      setTitleColor(
        checkTitle.data
          ? ("red-500", console.log("name is unavailable"))
          : ("black", console.log("name is available "))
      ));
    setPrevText(title);
  }, [title, prevText, checkTitle, setNameTaken, nameTaken]);

  return (
    <div className="flex flex-row">
      {/* thema title */}
      {/* Nieuwe Pagina */}
      <input
        className={`text-4xl font-semibold text-${titleColor} w-[16.5rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        value={title}
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        disabled={nameTaken}
        onClick={() => saveTheme.mutate(title)}
        className={`w-10 h-10 p-1 ${
          nameTaken ? "bg-gray-500" : "bg-purple-500"
        } rounded-lg`}
      >
        <img
          draggable={false}
          className="inline-block w-5 h-5"
          src={saveImg}
          alt="edit"
        />
      </motion.button>
    </div>
  );
};

export default TitleInput;
