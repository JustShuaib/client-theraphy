import plusImg from "./../../../../assets/plus-square-svgrepo-com.svg";
// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TitleInput from "../../../../components/titleInput/TitleInput";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Page = () => {
    const [themaName, setThemaName] = useState("");
    const [nameTaken, setNameTaken] = useState(true);
    const [savedTheme, setSavedTheme] = useState(false)

    const navigate = useNavigate();

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
                    setSavedTheme={setSavedTheme}
                    setTitle={setThemaName}
                    endpoint="/api/check_theme_existence"
                    placeholder="Nieuwe Thema"
                />
                {/* <h1 className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}>bladzijde</h1> */}
            </div>
            <div className="grid grid-cols-3 gap-20">
                <div className="grid grid-cols-3 gap-20">
                    <motion.button
                        whileTap={tapCheck}
                        whileHover={hoverCheck}
                        disabled={savedTheme}
                        onClick={() => { navigate("/admin/thema/bladzijde/create"); }}
                        className={`flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br ${!nameTaken ? 'from-purple-400 to-purple-700' : 'from-gray-400 to-gray-700'} `}>
                        <div className="flex flex-row">
                            <div className="inline-block p-6 text-2xl font-semibold text-center">Nieuwe pagina toevoegen <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
                        </div>
                    </motion.button>
                </div >
            </div >
        </div>
    )
}

export default Page;
