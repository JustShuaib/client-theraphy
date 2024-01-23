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
  const [postResponse, setPostResponse] = useState()
  const [recordedAudio, setRecordedAudio] = useState()
  const [sendAudio, setSendAudio] = useState('')

  const [demoAudio, setDemoAudio] = useState()

  // updates the current Exercise
  useEffect(() => {
    if (getResponseArray)
      getResponseArray.map((item) => {
        if (currentExercise === item.id) {
          setExerciseName(item.name)
          console.log(currentExercise)
        }
      })
  }, [currentExercise, getResponseArray])

  // fetch words
  const { data, isSuccess, error } = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = exerciseType === "words" ? await fetch('api/get_random_words') : await fetch('api/get_random_sentences')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonResponse = await response.json()
      // if the resulting data is an array of objects
      return jsonResponse
      //  
    }
  })

  if (error)
    console.log(error)
  // store the response of fetch words for use & referencing
  useEffect(() => {
    if (isSuccess && data) {
      setGetResponseArray(data)
      console.log("store info: " + data)
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
        console.log('responseData for fetch audio is:' + responseData)
        // create url for the blob data
        const url = URL.createObjectURL(responseData)
        console.log("get audio res: " + url)
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
          console.log('this should be the audio resp' + res.audio)
        }
      })
  }, [data, isSuccess, exerciseName])


  // POST request to get diff
  useEffect(() => {
    const sendPostRequest = async () => {
      try {
        const formData = new URLSearchParams();
        formData.append('name', exerciseName);
        formData.append('audio', recordedAudio);

        const response = await fetch('api/compare_sentences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Handle the response as needed
        const responseData = await response.json();
        setPostResponse(responseData)
        // console.log('POST request response:', responseData);
        return responseData
      } catch (error) {
        console.error('Error sending POST request:', error);
      }
    };

    if (sendAudio)
      sendPostRequest().then(
        setSendAudio(!sendAudio)
      ).then((response) => console.log(response))

  }, [sendAudio, exerciseName, recordedAudio])


  return (
    <div className="flex flex-row w-full">
      <Panel setExercise={setCurrentExercise} arrayResponse={getResponseArray} />
      <div className="w-5/6 px-12 py-4">
        <ExerciseAudio demoAudio={demoAudio} />
        <Recorder setRecordedAudio={setRecordedAudio} setSendAudio={setSendAudio} />
      </div>
      {/* test */}
      <div className="w-full h-full text-white bg-[#6366F1]">
        <DiffUse diffInput={postResponse} />
      </div>
    </div>
  )
}

export default Words