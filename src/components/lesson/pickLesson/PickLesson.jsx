/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

const PickLesson = ({ setExerciseType, fetchWords, fetchSentences }) => {
  return (
    <div>
      <div className='flex flex-row justify-between pt-20'>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => { setExerciseType('word'), fetchWords() }} className='relative w-64 h-48 bg-[#faa613] text-white rounded-2xl flex flex-row justify-center content-end'>
          <p className="absolute text-5xl antialiased font-semibold h-fit bottom-8">woorden</p>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => { setExerciseType('sentence'), fetchSentences() }} className='relative w-64 h-48 bg-[#FF715B] text-white rounded-2xl flex flex-row justify-center content-end'>
          <p className="absolute text-5xl antialiased font-semibold h-fit bottom-8">zinnen</p>
        </motion.div>
      </div>
    </div>
  )
}

export default PickLesson