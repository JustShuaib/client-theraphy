/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { diffWords } from 'diff';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// const correctText = 'The quick brown fox jumps over the lazy dog.';
// const transcribedText = 'The quick brown fox jumps over the lazy cat.';


const DiffUse = ({ diffInput }) => {

  const correctText = diffInput.correct_sentence
  const transcribedText = diffInput.transcribed_sentence
  const differences = diffWords(correctText, transcribedText);

  const highlightedText = differences.map((difference, index) => {
    const color = difference.added ? 'green' : difference.removed ? 'red' : 'green';
    return <span key={index} style={{ color }}>{difference.value}</span>;
  });

  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  useEffect(() => {
    const areTextsEqual = correctText === transcribedText;

    if (areTextsEqual) {
      playAudio('goed-gedaan.mp3');
    } else {
      playAudio('probeer-opnieuw.mp3');
    }
  }, []); // This effect runs once on component mount

  return (
    <div className='pt-4 text-3xl'>
      {/* <SyntaxHighlighter language="javascript" style={docco}> */}
      {highlightedText}
      {/* </SyntaxHighlighter> */}
    </div>
  );
};

export default DiffUse;