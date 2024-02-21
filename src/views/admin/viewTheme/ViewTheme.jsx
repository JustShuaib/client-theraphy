import { useLocation } from "react-router-dom"
import plusImg from "./../../../assets/plus-square-svgrepo-com.svg"
import { useMutation, useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Theme = () => {

    const { state } = useLocation()
    const navigation = useNavigate()

    const { data, error } = useQuery({
        queryKey: ['thema'],
        queryFn: async () => {
            const response = await fetch('/api/fetch_theme_pages', {
                body: { thema_name: state }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            console.log(`this is the fetch template response`)
            console.log(response)
            const jsonResponse = await response.json();
            const pages = jsonResponse.pages;
            console.log(`this is the returned templates data: should be a list of strings`)
            console.log(pages)
            return pages
        }
    })
    if (error)
        console.log(error)


    const handleDelete = useMutation(
        {
            mutationFn: async () => {
                const response = axios.post('/api/delete_theme', state)
                const status = response.json()
                return status.success
            }
        }
    )

    return (
        <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
            <div className="flex flex-row pb-12">
                <h1 className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}>{state}</h1>
                <motion.button
                    onClick={() => { handleDelete({}) }}
                    // onClick={() => setCurrentStep(currentStep + 1)}
                    className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-red-500 border rounded-lg place-self-end w-fit"> DELETE THEME </motion.button>
            </div>
            <div className="grid grid-cols-3 gap-20">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
                    {/* <Link to='/admin/thema/bladzijde'> */}
                    <div className="flex flex-row">
                        <div className="inline-block p-6 text-2xl font-semibold text-center">Nieuwe pagina toevoegen <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
                    </div>
                    {/* </Link> */}
                </motion.button>

                {data !== (undefined) && data.map((page) => {
                    const index = Math.random() * 1000
                    return (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { navigation(`/admin/thema/${state}`) }}
                            key={index} className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
                            <p className="p-6 text-2xl font-semibold text-center">{page.name}</p>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

export default Theme