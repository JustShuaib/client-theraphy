import { Outlet } from 'react-router'
import './App.css'
// import { Lesson } from './components/lesson'
// import { Panel } from './components/panel'
// import { History } from './components/history'
// import { PickLesson } from './components/lesson/pickLesson'
function App() {
  // const fetchedObjects = []
  // const [currentExercise, setCurrentExercise] = useState('')
  // const [listOfAudio, SetListOfAudio] = useState([])


  return (
    <div className='w-full max-w-[80rem] h-screen m-auto'>
      <Outlet />
    </div>
  )
}

export default App
