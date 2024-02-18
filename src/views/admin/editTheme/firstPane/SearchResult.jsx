/* eslint-disable react/prop-types */
import { useState } from "react"
import AudioPlayer from "./AudioPlayer"

const SearchResult = ({ audio, image, video }) => {
    const [selectImage, setSelectImage] = useState(true)
    const [selectAudio, setSelectAudio] = useState(true)
    const [selectVideo, setSelectVideo] = useState(true)

    const options = {
        1: Image_only,
        2: audio only,
        3: for video only,
        4: for image and audio,
        5: for image and video,
        6: for audio and video,
        7:  for image, audio and video.
        
    }

    return (
        <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
            <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
            <div className='flex flex-row justify-between px-12'>
                <div className='flex flex-col justify-center gap-4'>
                    <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                        <img className='object-contain w-full h-full' src={image} alt="" />
                    </div>
                    <input
                        // onClick={}
                        options={}
                        onChange={setSelectImage(!selectImage)}
                        checked={selectImage}
                        type="radio" name="" id="" />
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <AudioPlayer audioSrc={audio} />
                    <input
                        options={}
                        onChange={setSelectAudio(!selectAudio)}
                        checked={selectAudio}
                        type="radio" name="" id="" />
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                        <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />
                        <video className='absolute object-contain w-full h-full ' src={video}></video>
                    </div>
                    <input
                    options={}
                        onChange={setSelectVideo(!selectVideo)}
                        checked={selectVideo}
                        type="radio" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default SearchResult