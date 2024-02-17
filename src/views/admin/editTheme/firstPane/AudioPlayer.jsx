/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';

function AudioPlayer({ audioSrc }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <button className='focus:outline-none' onClick={togglePlay}>
            <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] rounded-full bg-opacity-50'>
                <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />
                <audio ref={audioRef} src={audioSrc} onEnded={handleAudioEnded}></audio>
            </div>
        </button>
    );
}

export default AudioPlayer;
