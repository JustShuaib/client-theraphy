import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Landing = () => {
  return (
    <div className="w-full h-screen pt-12 pl-8 mx-auto bg-[#1F2937]">
      <div className="grid grid-cols-1 gap-20 mx-auto sm:grid-cols-3 ">
        <Link className="h-fit w-fit" to="/admin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shadow-md shadow-blue-500/50 flex flex-col w-[16rem] h-[4rem] rounded-md bg-black text-white bg-gradient-to-br from-blue-300 to-blue-700">
            <p className="w-full p-6 text-3xl font-semibold text-end ">Client</p>
          </motion.button>
        </Link>

        <Link className="h-fit w-fit" to="/admin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shadow-md shadow-orange-500/50 flex flex-col w-[16rem] h-[4rem] rounded-md bg-black text-white bg-gradient-to-br from-orange-300 to-orange-700">
            <p className="w-full p-6 text-3xl font-semibold text-end">Therapist</p>
          </motion.button>
        </Link>

        <Link className="h-fit w-fit" to="/admin">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shadow-md shadow-purple-400/50 flex flex-col w-[16rem] h-[4rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
            <p className="w-full p-6 text-3xl font-semibold text-end">Admin</p>
          </motion.button>
        </Link>

      </div>
    </div>
  )
}
