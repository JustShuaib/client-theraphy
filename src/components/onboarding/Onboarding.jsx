import { useState } from "react"
import { PickLesson } from "../lesson/pickLesson"
import { Exercise } from "../exercise"

const Onboarding = () => {
    const [picked, setPicked] = useState(false)
    const [exerciseType, setExerciseType] = useState('')
    return (
        <div className='relative flex flex-col content-center w-full h-full '>

            {/* exercise Panel */}
            {/* <Panel setExercise={setCurrentExercise} listOfAudio={listOfAudio} /> */}

            {/* lesson screen */}
            {/* <Lesson currentExercise={currentExercise} SetListOfAudio={SetListOfAudio} /> */}

            {/* history screen */}
            {/* <History /> */}
            {/* <div className='p-4 text-white bg-[#6366F1] w-[50rem]'>
      <h3 className='pb-2 text-3xl font-semibold'>Oefening Geschiedenis</h3>
      <div className='w-full h-1 bg-white rounded-sm'>{currentExercise}</div>
    </div> */}

            {/* revamped UI */}

            {!picked ?
                (<div className='pt-8 text-center text-white'>
                    <h3 className='text-5xl antialiased font-semibold text-white'>logopedie</h3>
                    <p className='pt-4 text-xl font-semibold'>Kies een oefening om door te gaan:</p>
                    <PickLesson setPicked={setPicked} setExerciseType={setExerciseType}/>
                </div>)
            :
                (
                    <Exercise exerciseType={exerciseType}/>
                )
            }

        </div>
    )
}

export default Onboarding