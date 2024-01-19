import { useState } from "react"
import Recorder from "../recorder/Recorder"
import {
  useQuery,
} from '@tanstack/react-query'

const Words = () => {
  const [audioBase64, setAudioBase64] = useState()

  const fileReader = new FileReader();
  
  fileReader.onloadend = function () {
    // The result will be a data URL representing the audio in Base64
    const base64String = fileReader.result.split(',')[1];
    // Now you can use 'base64String' as needed
    setAudioBase64(base64String);
  }
  const audioToBase64 = (audioBlob) => {
    fileReader.readAsDataURL(audioBlob)
  };

  
  const info = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = await fetch('https://d20b8eef-89ec-4ee4-9f8c-e9184f13ed57.mock.pstmn.io/get')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    }
  })
  console.log(info)



  return (
    <div className="px-12 py-4">
      <Recorder setAudioBase64={audioToBase64} />
      <button onClick={() => { console.log(info.data.data), console.log('the new' + info.data + " loading: " + info.isLoading + " status: " + info.status) }}>
        click me
      </button>
      {/* {(info.data.data).map((item) => {
        return <div key={item.id}>{item}</div>
      })} */}
      <div></div>
    </div>
  )
}

export default Words