/* eslint-disable react/prop-types */
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

const SearchResult = ({ audio, image, video }) => {
    const [selectImage, setSelectImage] = useState(true);
    const [selectAudio, setSelectAudio] = useState(true);
    const [selectVideo, setSelectVideo] = useState(true);


    // Function to handle options based on selected media types
    const handleOptions = () => {
        // Determine the combination of selected media types
        const mediaTypes = [
            selectImage ? 'image' : null,
            selectAudio ? 'audio' : null,
            selectVideo ? 'video' : null
        ].filter(Boolean); // Remove null values from the array

        // Generate options based on the combination of media types
        switch (mediaTypes.length) {
            case 1:
                return `${mediaTypes[0]} only`;
            case 2:
                return `for ${mediaTypes.join(' and ')}`;
            case 3:
                return `for ${mediaTypes.join(', ')}`;
            default:
                return 'No media selected';
        }
    };
    
    // const handleInputChange = () => {
    //     // Update the search item with the new options
    //     updateSearchResult({ ...search, options: handleOptions() });
    // };
    
    return (
        <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
            <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
            <div className='flex flex-row justify-between px-12'>
                <div className='flex flex-col justify-center gap-4'>
                    <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                        <img className='object-contain w-full h-full' src={image} alt="" />
                    </div>
                    <input
                        onChange={() => setSelectImage(!selectImage)}
                        checked={selectImage}
                        type="checkbox" />
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <AudioPlayer audioSrc={audio} />
                    <input
                        onChange={() => setSelectAudio(!selectAudio)}
                        checked={selectAudio}
                        type="checkbox" />
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                        <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />
                        <video className='absolute object-contain w-full h-full ' src={video}></video>
                    </div>
                    <input
                        onChange={() => setSelectVideo(!selectVideo)}
                        checked={selectVideo}
                        type="checkbox" />
                </div>
            </div>
            <div>{handleOptions()}</div>
        </div>
    )
};

export default SearchResult;
