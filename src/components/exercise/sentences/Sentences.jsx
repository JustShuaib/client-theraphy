import { useState, useEffect } from "react";
import Recorder from "../recorder/Recorder"
import { useQuery } from "@tanstack/react-query";
import { Panel } from "../panel";
import DiffUse from "../diff/DiffUse";

const Sentences = () => {
  const [currentExercise, setCurrentExercise] = useState()
  const [audioBase64, setAudioBase64] = useState()
  const [customArray, setCustomArray] = useState([])
  const [demoAudio, setDemoAudio] = useState()
  const [postResponse, setPostResponse] = useState()

  const [exerciseName, setExerciseName] = useState()
  const fileReader = new FileReader();

  fileReader.onloadend = function () {
    // The result will be a data URL representing the audio in Base64
    const base64String = fileReader.result.split(',')[1];
    // Now you can use 'base64String' as needed
    setAudioBase64(base64String);
    console.log(base64String)
  }

  useEffect(() => {
    // sets the new audio reference when a new exercise is chosen.
    customArray.map((item) => {
      if (currentExercise === item.id) {
        setExerciseName(item.name)
        // console.log(currentExercise)
        setDemoAudio(item.audio)
        // console.log(item.audio)
      }
    })
  }
    , [currentExercise, customArray])

  
    const audioToBase64 = async (audioBlob) => {
      await fileReader.readAsDataURL(audioBlob)
      // send to backend
      const response = await sendPostRequest()
      .then(()=>
        setPostResponse(response)
      )
      .catch((err)=>{
        console.log(err)
      }
      )
    };


  // function to send a POST request
  const sendPostRequest = async () => {
    try {
      const response = await fetch('api/compare_sentences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify({
          // Add any data you want to send in the request body
          name: exerciseName,
          key2: audioBase64,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle the response as needed
      const responseData = await response.json();
      const data = responseData.data
      return data
      // console.log('POST request response:', responseData);
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };



  // fetch words
  const info = useQuery({
    queryKey: ['sentences'],
    queryFn: async () => {
      const response = await fetch('api/get_random_sentences')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonResponse = await response.json()
      const data = jsonResponse.data
      return data
    }
  })

  useEffect(() => {
    if (info.isSuccess && info.data) {
      const datum = info.data
      setCustomArray(datum)
    }
  }, [info.data, info.isSuccess, setCustomArray])


  return (
    <div className="px-12 py-4">
      <Panel setExercise={setCurrentExercise} arrayResponse={customArray} />
      <div className="w-5/6 px-12 py-4">
        <Recorder setAudioBase64={audioToBase64} demoAudio={demoAudio} />
      </div>
      {/* test */}
      <div className="w-full h-full text-white bg-[#6366F1]">
        <DiffUse diffInput={postResponse}/>
      </div>
    </div>

  )
}

export default Sentences