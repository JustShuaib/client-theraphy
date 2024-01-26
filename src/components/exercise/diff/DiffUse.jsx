/* eslint-disable react/prop-types */
import SentenceComparison from './SentenceComarison';

const DiffUse = ({diffInput}) => {

  return (
    <div className='pt-4 text-3xl'>
      {diffInput=== undefined ?
      " "
      :
      <SentenceComparison correctSentence={diffInput.correct_sentence} transcribedSentence={diffInput.transcribed_sentence} phoneme={diffInput.missing_phonemes} />
    }
    </div>
  );
};

//to update all state from parent component in the child component, let's pass set state

export default DiffUse;