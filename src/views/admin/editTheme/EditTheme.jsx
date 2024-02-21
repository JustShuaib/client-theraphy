import { useState } from "react"
// import TestSteps from "./testSteps";
import FirstPane from "./firstPane/FirstPane";
// import SearchPane from "./SearchPane";
// import ThirdPane from "./ThirdPane";
import { useLocation } from "react-router-dom";

const onChange = (e) => {
    console.log('Change:', e.target.value);
};

const EditTheme = () => {
    const { state } = useLocation()
    const themeName = state;

    const [title, setTitle] = useState('')

    // the current step showing
    const [currentStep, setCurrentStep] = useState(0);

    // the current block being handled
    const [currentBlock, setCurrentBlock] = useState(0);

    // const [isOpen, setIsOpen] = useState(false)
    const [blockCount, setBlockCount] = useState('');

    // states that manage data
    // const [templateTitle, setTemplateTitle] = useState('')


    // const handleRoute = () => {
    //     //increase page count by 1
    //     setPageCount(pageCount + 1)
    // }

    return (
        <div className="flex flex-row w-screen h-full mx-auto overflow-hidden">
            <FirstPane themeName={themeName} title={title} setTitle={setTitle} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} blockCount={blockCount} setBlockCount={setBlockCount} currentStep={currentStep} setCurrentStep={setCurrentStep} setOnChange={onChange} />
        </div>
    )
}

export default EditTheme