/* eslint-disable react/prop-types */
// import { exercises } from '../../utils/exercises'

const Panel = ({ setExercise, listOfAudio }) => {
    return (
        <div>
            <div className='h-full px-4 pt-4 text-xl font-semibold text-white bg-[#6366F1] w-fit overflow-y-scroll'>
                <div className=' w-fit'>
                    {/* <p className='w-32 py-3 pb-8'>Speech Theraphy</p> */}
                    <div className='flex flex-col w-48 h-24 p-2 bg-white rounded-xl'>
                        <div className="flex flex-row justify-center align-center">
                            <div className="w-10 h-10 bg-black rounded-xl"></div>
                            <div className="pl-2 text-black "><p>Student</p></div>
                        </div>
                    </div>
                </div>
                {listOfAudio ?
                    listOfAudio.map((exercise) => {
                        return (
                            <div key={exercise.name} className='w-fit'>
                                <button
                                    className='w-32 p-0 py-3 m-0 focus:text-gray-800'
                                    onClick={() => { setExercise(exercise) }}>{exercise.name}</button>
                                <div className='w-full bg-white rounded-sm h-[2px]'></div>
                            </div>
                        )
                    })
                    :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default Panel