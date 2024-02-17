import { Link } from "react-router-dom"
import plusImg from "./../../../assets/plus-square-svgrepo-com.svg"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import TitleInput from "../../../components/titleInput/TitleInput"
import { motion } from "framer-motion"

const Theme = () => {
  const [themaName, setThemaName] = useState('')

  const { data, error } = useQuery({
    queryKey: ['thema'],
    queryFn: async () => {
      const response = await fetch('/api/fetch_all_pages')
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

  return (
    <div className="w-[80%] h-screen pt-20 pl-8 mx-auto">
      <div className="pb-12 ">
        <TitleInput title={themaName} setTitle={setThemaName} endpoint='/api/check_theme_existence' placeholder='Nieuwe Thema' />
        {/* <h1 className={`text-4xl font-semibold w-[16rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}></h1> */}
      </div>
      <div className="grid grid-cols-3 gap-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
          <Link to='/admin/thema/bladzijde'>
            <div className="flex flex-row">
              <div className="inline-block p-6 text-3xl font-semibold text-center">Nieuw thema maken <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
            </div>
          </Link>
        </motion.button>

        {data !== (undefined) && data.map((template) => {
          const index = Math.random() * 1000
          return (
            <div key={index} className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
              <p className="p-6 text-3xl font-semibold text-center">{template}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Theme