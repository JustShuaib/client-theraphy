/* eslint-disable react/prop-types */
// import { exercises } from '../../utils/exercises'

const Panel = ({ setExercise, listOfAudio }) => {
    return (
        <div>
            <div className='h-full px-10 pt-4 text-xl font-semibold text-white bg-[#6366F1] w-[10rem] overflow-y-scroll'>
                <div className=' w-fit'>
                    {/* <p className='w-32 py-3 pb-8'>Speech Theraphy</p> */}
                    <div className='w-full bg-white rounded-sm h-[2px]'></div>
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