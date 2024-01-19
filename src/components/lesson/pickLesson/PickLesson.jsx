/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const PickLesson = () => {
  return (
    <div>
      <div className='flex flex-row justify-between pt-20 mx-auto w-fit gap-x-24'>
        <Link draggable={false} to='/exercise/woorden'>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
             className='relative w-64 h-48 bg-[#faa613] text-white rounded-2xl flex flex-row justify-center content-end'>
            <p className="absolute text-5xl antialiased font-semibold h-fit bottom-8">woorden</p>
          </motion.div>

        </Link>
        <Link draggable={false} to='/exercise/zinnen'>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative w-64 h-48 bg-[#FF715B] text-white rounded-2xl flex flex-row justify-center content-end'>
            <p className="absolute text-5xl antialiased font-semibold h-fit bottom-8">zinnen</p>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export default PickLesson