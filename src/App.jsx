import { useState } from 'react'
import './App.css'
import { Lesson } from './components/lesson'
import { Panel } from './components/panel'
// import { History } from './components/history'

function App() {
  // const fetchedObjects = []
  const [currentExercise, setCurrentExercise] = useState('')
  const [listOfAudio, SetListOfAudio] = useState('')
  
  // useEffect(() => {
  //   console.log(listOfAudio)
  // }, [listOfAudio])

  return (
    <div className='w-auto h-auto'>
      <div className='relative flex flex-row w-screen h-screen'>
        {/* exercise Panel */}
        <Panel setExercise={setCurrentExercise} listOfAudio={listOfAudio} />
        {/* lesson screen */}
        <Lesson currentExercise={currentExercise} SetListOfAudio={SetListOfAudio} />
        {/* history screen */}
        {/* <History /> */}
        <div className='p-4 text-white bg-[#6366F1] w-[50rem]'>
          <h3 className='pb-2 text-3xl font-semibold'>Oefening Geschiedenis</h3>
          <div className='w-full h-1 bg-white rounded-sm'>{currentExercise}</div>
        </div>
      </div>
    </div>
  )
}

export default App
