import { useEffect, useState } from "react";
import SearchResult from "../editTheme/firstPane/SearchResult";
const MediaSelection = ({ words }) => {
  const [blockStates, setBlockStates] = useState([]);

  useEffect(() => {
    // Dynamically initialize the state for each block based on selectedWords
    const initialBlockStates = words.map(() => ({
      audio: false,
      image: false,
      video: false,
    }));
    setBlockStates(initialBlockStates);
  }, [words]);
  console.log({ blockStates });
  const handleCheckboxChange = (blockIndex, type) => (e) => {
    console.log({ blockIndex, type, e });
    // Update the state for the corresponding checkbox
    setBlockStates((prevBlockStates) => {
      const newState = [...prevBlockStates];
      newState[blockIndex] = {
        ...newState[blockIndex],
        [type]: e.target.checked,
      };
      return newState;
    });
  };

  return (
    <div className="flex max-h-[34rem] basis-2/5 flex-col gap-y-6 overflow-y-scroll">
      {words.map((word, index) => (
        <SearchResult
          handleChange={handleCheckboxChange}
          key={word.id}
          index={index}
          {...word}
        />
      ))}
    </div>
  );
};

export default MediaSelection;
