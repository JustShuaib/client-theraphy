/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
// import editImg from '../../assets/edit-3-svgrepo-com.svg'
import saveImg from "../../assets/save-svgrepo-com.svg";
import axios from "axios";
// import { motion } from "framer-motion";
import { Button } from "antd";

const TitleInput = ({
  title,
  setTitle,
  endpoint,
  placeholder,
  nameTaken,
  setNameTaken,
  setHasSavedTheme,
}) => {
  const [titleColor, setTitleColor] = useState();
  const [prevText, setPrevText] = useState("");

  const inputRef = useRef(null);
  const saveBtnRef = useRef(null);

  const checkTitle = useMutation({
    mutationFn: async (title) => {
      try {
        const response = await axios.post(endpoint, title);
        const result = response.data;
        return result.exists;
      } catch (error) {
        console.error("Error checking title:", error.message);
        throw error; // Rethrow the error to mark the mutation as failed
      }
    },
  });

  const saveTheme = useMutation({
    mutationFn: async (themeName) => {
      console.log("save theme func firing");
      try {
        const response = await axios.post(
          "/api/save_theme",
          { theme_name: themeName },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error saving theme:", error.message);
        throw error; // Rethrow the error to mark the mutation as failed
      }
    },
  });

  const hasSavedTheme = saveTheme.data;
  if (hasSavedTheme) {
    setHasSavedTheme(true);
    if (saveBtnRef.current) {
      saveBtnRef.current.disabled = true;
    }
  }

  const handleSave = (title) => {
    setHasSavedTheme(true); //THIS WILL BE REMOVED & REPLACED WITH THE ONE AT THE TOP LATER
    saveTheme.mutate(title);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (title !== prevText) {
          checkTitle.mutate({ theme_name: title });
          if (checkTitle.isError) {
            console.log("Error checking title:", checkTitle.error.message);
          } else {
            const isNameTaken = checkTitle.data && checkTitle.data.exists;
            setNameTaken(isNameTaken);
            setTitleColor(isNameTaken ? "red-500" : "black");
            console.log(
              isNameTaken ? "name is unavailable" : "name is available"
            );
          }
        }
      } catch (error) {
        console.error("Error in useEffect:", error.message);
      } finally {
        setPrevText(title);
      }
    };

    fetchData();
  }, [title, prevText, checkTitle, setNameTaken]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (title !== prevText) {
  //         await checkTitle.mutate({ theme_name: title });

  //         if (checkTitle.isError) {
  //           console.log("Error checking title:", checkTitle.error.message);
  //         } else {
  //           setNameTaken(checkTitle.data.exists);
  //           setTitleColor(checkTitle.data.exists ? "red-500" : "black");
  //           console.log(
  //             checkTitle.data.exists
  //               ? "name is unavailable"
  //               : "name is available"
  //           );
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error in useEffect:", error.message);
  //     } finally {
  //       setPrevText(title);
  //     }
  //   };

  //   fetchData();
  // }, [title, prevText, checkTitle, setNameTaken]);

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
      <Button
        loading={saveTheme.isPending}
        icon={
          <img
            draggable={false}
            className="inline-block w-5 h-5"
            src={saveImg}
            alt="edit"
          />
        }
        disabled={nameTaken}
        ref={saveBtnRef}
        onClick={() => handleSave(title)}
        style={{
          width: "2.5rem",
        }}
        className={`custom-save-btn w-10 h-10 p-1 ${
          nameTaken ? "bg-gray-500" : "bg-purple-500 hover:bg-red-300"
        } rounded-lg`}
      />
      {/* <motion.button
        whileTap={{ scale: 0.95 }}
        disabled={nameTaken}
        ref={saveBtnRef}
        onClick={() => handleSave(title)}
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
      </motion.button> */}
    </div>
  );
};

export default TitleInput;
