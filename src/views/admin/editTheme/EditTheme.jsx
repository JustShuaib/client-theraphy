import { useState } from "react"
// import TestSteps from "./testSteps";
import FirstPane from "./firstPane/FirstPane";
// import SearchPane from "./SearchPane";
// import ThirdPane from "./ThirdPane";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

    const [pageCount, setPageCount] = useState(0)
    // states that manage data
    // const [templateTitle, setTemplateTitle] = useState('')

    //controls what view shows
    // const views = [{
    //     id: 1,
    //     element: <FirstPane themeName={themeName} title={title} setTitle={setTitle} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} blockCount={blockCount} setBlockCount={setBlockCount} current={currentStep} setCurrent={setCurrentStep} setOnChange={onChange} />
    // },
    // {
    //     id: 2,
    //     element: <BlocksPage />
    //     // element: <SearchPane blockCount={blockCount} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} />
    // },
    // {
    //     id: 3,
    //     element: <ThirdPane />
    // }
    // ]

    const handleRoute = () => {
        //increase page count by 1
        setPageCount(pageCount + 1)
    }

    return (
        <div className="w-[80%] h-full pl-8 mx-auto flex flex-row">
            <div className="flex flex-col w-[70%]">
                <FirstPane themeName={themeName} title={title} setTitle={setTitle} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} blockCount={blockCount} setBlockCount={setBlockCount} current={currentStep} setCurrent={setCurrentStep} setOnChange={onChange} />
                {/* {views.map((view) => {
                    return (
                        (view.id) === currentStep + 1 && (<div key={view.id} className="h-screen overflow-hidden ">{view.element}</div>)
                    )
                })} */}
            </div>
            <div className="flex flex-col w-[30%] pl-4 my-auto">
                {/* <TestSteps current={currentStep} setCurrent={setCurrentStep} /> */}
                <motion.button
                    // onClick={() => setCurrentStep(currentStep + 1)}
                    onClick={() => { handleRoute() }}
                    className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-blue-500 border rounded-lg place-self-end w-fit">next</motion.button>
            </ div>
        </div>
    )
}

export default EditTheme