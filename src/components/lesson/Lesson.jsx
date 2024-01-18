/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Recorder } from './recorder'
import { PickLesson } from './pickLesson'
import { DiffUse } from './diff'

const Lesson = ({ currentExercise, setListOfAudio }) => {
    const [exerciseType, setExerciseType] = useState('')
    const [diffResponse, setDiffResponse] = useState('')

    // useEffect(() => {
    //     setExerciseType('')
    // }, [currentExercise])

    const fetchWords = async () => {
        await fetch('api/get_random_words')
            .then(response => response.json())
            .then(data => setListOfAudio(data));
    }

    const fetchSentences = async () => {
        await fetch('api/get_random_sentences')
            .then(response => response.json())
            .then(data => setListOfAudio(data));
    }

    const compareModel = async (file) => {
        await fetch('api/compare_sentences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': currentExercise.name,
                'audio': file,
            })
        })
            .then(response => response.json())
            .then(data => setDiffResponse(data));
    }

    useEffect(() => {
        console.log(diffResponse)
    }, [diffResponse])

    return (
        <div className='flex flex-col content-center w-full p-8 pt-4'>
            {/* lesson title */}
            <div className='pb-4 mx-auto'>
                {/* use this to select what audio file to play */}
                {/* {currentExercise} */}
            </div>
            {exerciseType === ''
                ?
                // {/* allow user pick word or sentence */}
                <PickLesson setExerciseType={setExerciseType} fetchWords={fetchWords} fetchSentences={fetchSentences} />
                :
                //  {/* lesson body */}
                (
                    <div>
                        <Recorder compareModel={compareModel} currentExercise={currentExercise} />
                        <DiffUse diffInput={diffResponse} />
                    </div>
                )
            }
        </div>
    )
}

export default Lesson