import plusImg from "./../../../../assets/plus-square-svgrepo-com.svg"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react";
import TitleInput from "../../../../components/titleInput/TitleInput";
import { motion } from 'framer-motion'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Page = () => {
    const [themaName, setThemaName] = useState()
    const navigate = useNavigate()
    const { data, error } = useQuery({
        queryKey: ['pages'],
        queryFn: async () => {
            const response = await fetch('/api/fetch_theme_pages', {
                method: 'POST',
                headers: ''
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            console.log(`this is the fetch template response`)
            console.log(response)
            const jsonResponse = await response.json();
            const templates = jsonResponse.pages;
            console.log(`this is the returned templates data: should be a list of strings`)
            console.log(templates)
            return templates
        }
    })
    if (error)
        console.log(error)


    const handleClick = async (themaName) => {
        const response = await savetheme.mutate({ 'theme_name': themaName })
        console.log(response)
        response===true ? navigate('/admin/thema/bladzijde/create', { state: themaName }) : console.log('handleclick failed')
        
    }

    const savetheme = useMutation({
        mutationFn: async (themaName) => {
            const response = axios.post('/api/save_theme', themaName)
            return response.success
        }
    })
    return (
        <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
            <div className="pb-12 ">
                <TitleInput title={themaName} setTitle={setThemaName} endpoint='/api/check_theme_existence' placeholder='Nieuwe Thema' />
                {/* <h1 className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}>bladzijde</h1> */}
            </div>
            <div className="grid grid-cols-3 gap-20">
                <button
                    className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
                    <motion.button
                        onClick={() => handleClick(themaName)}
                        to='/admin/thema/bladzijde/create'>
                        <div className="flex flex-row">
                            <div className="inline-block p-6 text-2xl font-semibold text-center">Nieuwe pagina toevoegen <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
                        </div>
                    </motion.button>
                </button>

                {data !== (undefined) && data.map((template) => {
                    const index = Math.random() * 1000
                    return (
                        <div key={index} className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
                            <p className="p-6 text-2xl font-semibold text-center">{template}</p>
                        </div>
                    )
                })}
                {/* <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="absolute flex flex-col justify-center w-12 h-12 bg-purple-500 rounded-full right-12 bottom-12">
                    <img className="mx-auto h-7 w-7" src="/save-svgrepo-com.svg" alt="" />
                </motion.button> */}
            </div>
        </div>
    )
}

export default Page