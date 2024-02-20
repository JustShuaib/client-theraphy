import plusImg from "./../../../../assets/plus-square-svgrepo-com.svg";
// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TitleInput from "../../../../components/titleInput/TitleInput";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Page = () => {
    const [themaName, setThemaName] = useState("");
    const [nameTaken, setNameTaken] = useState(true);

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
                    className={`flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br ${!nameTaken
                        ? "from-purple-400 to-purple-700"
                        : "from-gray-400 to-gray-700"
                        } `}
                >
                    <motion.button
                        disabled={nameTaken}
                        // onClick={() => { console.log('theme') }}
                        to="/admin/thema/bladzijde/create"
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
                        <div className="grid grid-cols-3 gap-20">
                            <Link
                                to='/admin/thema/bladzijde/create'>
                                <motion.button
                                    whileTap={tapCheck}
                                    whileHover={hoverCheck}
                                    disabled={nameTaken}
                                    className={`flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br ${!nameTaken ? 'from-purple-400 to-purple-700' : 'from-gray-400 to-gray-700'} `}>
                                    <div className="flex flex-row">
                                        <div className="inline-block p-6 text-2xl font-semibold text-center">Nieuwe pagina toevoegen <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
                                    </div>
                                </motion.button>
                            </Link>
                        </div >
                    </motion.button>
                </motion.button>
            </div >
        </div>
    )
}

export default Page;
