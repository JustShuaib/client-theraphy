import { useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"

const ViewPage = () => {
    const { state } = useLocation()

    const { data, error } = useQuery({
        queryKey: ['viewPage'],
        queryFn: async () => {
            const response = await fetch('/api/fetch_theme_pages', {
                body: { page_name: state }
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

    return (
        <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
            <div className="pb-12 ">
                <h1 className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}>Thema</h1>
            </div>
            <div className="grid grid-cols-3 gap-20">

                {data !== (undefined) && data.map((template) => {
                    const index = Math.random() * 1000
                    return (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            key={index} className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
                            <p className="p-6 text-2xl font-semibold text-center">{template}</p>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewPage;