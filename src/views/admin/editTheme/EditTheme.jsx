import { useState } from "react"
import TestSteps from "./testSteps";
import FirstPane from "./firstPane/FirstPane";
import SearchPane from "./SearchPane";
import ThirdPane from "./ThirdPane";


const onChange = (e) => {
    console.log('Change:', e.target.value);
};


const EditTheme = () => {
    const [title, setTitle] = useState('')

    // the current step showing
    const [currentStep, setCurrentStep] = useState(0);

    // the current block being handled
    const [currentBlock, setCurrentBlock] = useState(0);

    // const [isOpen, setIsOpen] = useState(false)
    const [blockCount, setBlockCount] = useState('');

    // states that manage data
    // const [templateTitle, setTemplateTitle] = useState('')

    //controls what view shows
    const views = [{
        id: 1,
        element: <FirstPane title={title} setTitle={setTitle} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} blockCount={blockCount} setBlockCount={setBlockCount} currentStep={currentStep} setCurrentStep={setCurrentStep} setOnChange={onChange} />
    },
    {
        id: 2,
        element: <SearchPane currentBlock={currentBlock} />
    },
    {
        id: 3,
        element: <ThirdPane />
    }
    ]
    return (
        <div className="w-[80%] h-full pl-8 mx-auto flex flex-row">
            <div className="flex flex-col w-[70%]">
                {views.map((view) => {
                    return (
                        (view.id) === currentStep + 1 && (<div key={view.id} className="h-screen overflow-hidden ">{view.element}</div>)
                    )
                })}
            </div>
            <div className="flex flex-col w-[30%] pl-4">
                <TestSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
                <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-blue-500 border rounded-lg place-self-end w-fit">next</button>
            </ div>
        </div>
    )
}

export default EditTheme