import { useState } from "react";
import Recorder from "../recorder/Recorder"
import { useQuery } from "@tanstack/react-query";
import { Panel } from "../panel";

const Sentences = () => {

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
    queryKey: ['sentences'],
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
      <Panel setExercise={setCurrentExercise} arrayResponse={customArray} />
      <div className="w-5/6 px-12 py-4">
        <Recorder setAudioBase64={audioToBase64} demoAudio={demoAudio} />
      </div>
      {/* test */}
      <div className="w-full h-full text-white bg-[#6366F1]">
        <div className="pt-4 pb-12 pl-6">
          <h3 className="pb-4 text-3xl">Correct Sentence:</h3>
          <div className="px-4 text-lg bg-gray-800 rounded-md w-fit">
            {/* {correct-sentences} */}
            You are Patient
          </div>
        </div>
        {
          'wrong' && <div className="pl-6">
            <h3 className="pb-4 text-3xl">Wrong Sentence:</h3>
            <div className="px-4 text-lg bg-gray-800 rounded-md w-fit">
              {/* {correct-sentences} */}
              You are Patient
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Sentences