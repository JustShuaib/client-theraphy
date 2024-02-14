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
    // the current page showing
    const [current, setCurrent] = useState(0);
    // const [isOpen, setIsOpen] = useState(false)
    const [blockCount, setBlockCount] = useState(0)

    // states that manage data
    // const [templateTitle, setTemplateTitle] = useState('')

    //controls what view shows
    const views = [{
        id: 1,
        element: <FirstPane title={title} setTitle={setTitle} blockCount={blockCount} setBlockCount={setBlockCount} current={current} setCurrent={setCurrent} setOnChange={onChange} />
    },
    {
        id: 2,
        element: <SearchPane />
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
                        (view.id) === current + 1 && (<div key={view.id} className="h-screen overflow-hidden overflow-y-scroll">{view.element}</div>)
                    )
                })}
            </div>
            <div className="flex flex-col w-[30%] pl-4">
                <TestSteps current={current} setCurrent={setCurrent} />
                <button
                    onClick={() => setCurrent(current + 1)}
                    className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-blue-500 border rounded-lg place-self-end w-fit">next</button>
            </ div>
        </div>
    )
}

export default EditTheme