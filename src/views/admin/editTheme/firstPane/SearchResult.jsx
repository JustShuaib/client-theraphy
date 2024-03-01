import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

const SearchResult = ({ name, audio, image, video, handleOption }) => {
  const [selectAudio, setSelectAudio] = useState(false);
  const [selectVideo, setSelectVideo] = useState(false);
  const [selectImage, setSelectImage] = useState(false);

  const [optionSum, setOptionSum] = useState(0);
  // Function to handle options based on selected media types
  const handleOptions = () => {
    // Determine the combination of selected media types
    const mediaTypes = [
      selectImage ? "image" : null,
      selectAudio ? "audio" : null,
      selectVideo ? "video" : null,
    ].filter(Boolean); // Remove null values from the array

    // Generate options based on the combination of media types
    switch (mediaTypes.length) {
      case 1:
        return `${mediaTypes[0]} only`;
      case 2:
        return `for ${mediaTypes.join(" and ")}`;
      case 3:
        return `for ${mediaTypes.join(", ")}`;
      default:
        return "No media selected";
    }
  };
  useEffect(() => {
    // Calculate the sum of selected options
    const newOptionSum =
      (selectImage ? 2 : 0) + (selectAudio ? 6 : 0) + (selectVideo ? 9 : 0);

    // Update optionSum state
    setOptionSum(newOptionSum);
  }, [selectImage, selectAudio, selectVideo]);

  useEffect(() => {
    // Handle the selected options based on the newOptionSum
    switch (optionSum) {
      case 2:
        handleOption(1, name);
        break;
      case 6:
        handleOption(2, name);
        break;
      case 9:
        handleOption(3, name);
        break;
      case 8:
        handleOption(4, name);
        break;
      case 11:
        handleOption(5, name);
        break;
      case 15:
        handleOption(6, name);
        break;
      case 17:
        handleOption(7, name);
        break;
      default:
        break;
    }
  }, [optionSum, handleOption, name]);

  //   useEffect(() => {
  //     if (optionSum === 2) {
  //       handleOption(1, name);
  //     } else if (optionSum === 6) {
  //       handleOption(2, name);
  //     } else if (optionSum === 9) {
  //       handleOption(3, name);
  //     } else if (optionSum === 8) {
  //       handleOption(4, name);
  //     } else if (optionSum === 11) {
  //       handleOption(5, name);
  //     } else if (optionSum === 15) {
  //       handleOption(6, name);
  //     } else if (optionSum === 17) {
  //       handleOption(7, name);
  //     }
  //   }, [optionSum, handleOption, name]);

  // useEffect(() => {
  //   setOptionSum((prevValue) => prevValue + (selectAudio ? 2 : 0));
  // }, [selectAudio]);

  // useEffect(() => {
  //   setOptionSum((prevValue) => prevValue + (selectImage ? 2 : 0));
  // }, [selectImage]);

  // useEffect(() => {
  //   setOptionSum((prevValue) => prevValue + (selectVideo ? 2 : 0));
  // }, [selectVideo]);

  // useEffect(
  //   () => [
  //     selectAudio
  //       ? setOptionSum((prevValue) => {
  //           prevValue + 2;
  //         })
  //       : setOptionSum((prevValue) => {
  //           prevValue - 2;
  //         }),
  //   ],
  //   [selectAudio]
  // );

  // useEffect(
  //   () => [
  //     selectImage
  //       ? setOptionSum((prevValue) => {
  //           prevValue + 2;
  //         })
  //       : setOptionSum((prevValue) => {
  //           prevValue - 2;
  //         }),
  //   ],
  //   [selectImage]
  // );

  // useEffect(
  //   () => [
  //     selectVideo
  //       ? setOptionSum((prevValue) => {
  //           prevValue + 2;
  //         })
  //       : setOptionSum((prevValue) => {
  //           prevValue - 2;
  //         }),
  //   ],
  //   [selectVideo]
  // );

  return (
    <div className="h-fit w-full rounded-lg bg-purple-500 py-8">
      <h3 className="mb-3 w-full text-center text-2xl font-semibold">{name}</h3>
      <div className="flex flex-row justify-between px-12">
        <div className="flex flex-col justify-center gap-4">
          <div className="h-20 w-20 rounded-md bg-[#ADB5BD] bg-opacity-50">
            <img className="h-full w-full object-contain" src={image} alt="" />
          </div>
          <input
            // value={2}
            onChange={() => setSelectImage(!selectImage)}
            checked={selectImage}
            type="checkbox"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <AudioPlayer audioSrc={audio} />
          <input
            // value={6}
            onChange={() => setSelectAudio(!selectAudio)}
            checked={selectAudio}
            type="checkbox"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex h-20 w-20 flex-row justify-center rounded-md bg-[#ADB5BD] bg-opacity-50">
            <img className="w-12" src="/play-svgrepo-com.svg" alt="audio svg" />
            {/* <video
              className="absolute h-fit w-full object-contain"
              src={video}
            ></video> */}
          </div>
          <input
            // value={9}
            onChange={() => setSelectVideo(!selectVideo)}
            checked={selectVideo}
            type="checkbox"
          />
        </div>
      </div>
      <div className="flex w-full flex-row justify-center">
        {handleOptions()}
      </div>
    </div>
  );
};

export default SearchResult;
