/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Recorder from "../recorder/Recorder"
import {
  useQuery
} from '@tanstack/react-query'
import { Panel } from '../panel'
import { DiffUse } from "../diff"
import { ExerciseAudio } from "../exerciseAudio"

const Words = ({ exerciseType }) => {
  const [currentExercise, setCurrentExercise] = useState()
  // this array stores the response of the get request run on page render; dataType: [{id, name},...]
  // getResponseArray actually means the Array resulting from the first Get Response, that was bad naming convention on my part.
  const [getResponseArray, setGetResponseArray] = useState([])
  const [exerciseName, setExerciseName] = useState()
  const [diffInput, setDiffInput] = useState()
  const [recordedAudio, setRecordedAudio] = useState()
  // const [sendAudio, setSendAudio] = useState('')

  const [demoAudio, setDemoAudio] = useState()

  // updates the current Exercise
  useEffect(() => {
    if (getResponseArray)
      getResponseArray.map((item) => {
        if (currentExercise === item.id) {
          setExerciseName(item.name)
          // console.log(currentExercise)
        }
      })
  }, [currentExercise, getResponseArray])

  // fetch words
  const { data, isSuccess } = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = exerciseType === "words" ? await fetch('api/get_random_words') : await fetch('api/get_random_sentences')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonResponse = await response.json()
      return jsonResponse
    }
  })

  // store the response of fetch words for use & referencing
  useEffect(() => {
    if (isSuccess && data) {
      setGetResponseArray(data)
      // console.log("store info: " + data)
    }
  }, [data, isSuccess, getResponseArray])


  //fetch audio for the exercise
  useEffect(() => {
    // fetches the new exercise audio when audio is chosen
    const fetchDemoAudioRequest = async () => {
      try {
        const response = await fetch('api/get_audio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/octet-stream'
          },
          body: JSON.stringify({
            'name': exerciseName
          })
        })

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.blob();
        // console.log('responseData for fetch audio is:' + responseData)
        // create url for the blob data
        const url = URL.createObjectURL(responseData)
        // console.log("get audio res: " + url)
        setDemoAudio(url)
        return url
      } catch (err) {
        console.log(err)
      }
    }

    // fetch demoAuio only if info returned is true
    if (isSuccess)
      data.map((item) => {
        if (item.name === exerciseName) {
          const res = fetchDemoAudioRequest()
          setDemoAudio(res.audio)
          // console.log('this should be the audio resp' + res.audio)
        }
      })
  }, [data, isSuccess, exerciseName])


  // POST request to get diff
  const sendPostRequest = async (adio) => {
    console.log(adio)
    // Create an audio context
    // const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // // Create a FileReader to read the contents of the Blob
    // const fileReader = new FileReader();

    // fileReader.onload = async () => {
    //   const arrayBuffer = fileReader.result;

    // // Decode the arrayBuffer into an audio buffer
    // const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    // const channel = audioBuffer.getChannelData(0)
    // console.log("channel"); console.log(channel)
    try {

      const formData = new FormData();
      formData.append('name', exerciseName);
      formData.append('audio', recordedAudio, "generic.wav");

      const boundary = '------WebKitFormBoundaryTuT1Rn4lqAJg8AyK'; // Use your actual boundary
      const headers = {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      };

      const response = await fetch('api/compare_sentences', {
        method: 'POST',
        headers: headers,
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle the response as needed
      const responseData = await response.json();
      setDiffInput(responseData)
      console.log("this is the recorded audio on word:" + exerciseName + ": " + recordedAudio)
      return responseData
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
    // the bracket below should be commented out if not used.
    // }
    // // Read the contents of the Blob as an ArrayBuffer
    // fileReader.readAsArrayBuffer(recordedAudio);
  };

  const sendAudio = (adio) => {
    const output = sendPostRequest(adio)
    console.log("this is the output of the get diffInput function, this gets sent to backend: "); console.log(output)
  }

  return (
    <div className="flex flex-row w-full">
      <Panel setExercise={setCurrentExercise} arrayResponse={getResponseArray} />
      <div className="w-5/6 px-12 py-4">
        <ExerciseAudio demoAudio={demoAudio} />
        <Recorder setRecordedAudio={setRecordedAudio} sendAudio={sendAudio} />
      </div>
      {/* test */}
      <div className="w-full h-full text-white bg-[#6366F1]">
        <DiffUse diffInput={diffInput} />
      </div>
    </div>
  )
}

export default Words