import { useRef, useState } from "react"
import editImg from "./../../../assets/edit-3-svgrepo-com.svg"
import TestSteps from "./testSteps";
import { Divider } from 'antd';

import { Flex, Input } from 'antd';

const { TextArea } = Input;

const onChange = (e) => {
    console.log('Change:', e.target.value);
};

const EditTheme = () => {
    const [title, setTitle] = useState('')
    const inputRef = useRef(null);
    const focusInput = () => {
        // Focus the input element when the button is clicked
        inputRef.current.focus();
    }
    return (
        <div className="w-full h-screen pt-24 pl-8 mx-aut">
            <div className="flex flex-col h-full">
                <div className="flex flex-row justify-start">
                    <input
                        className="text-4xl font-semibold text-black w-[16rem] h-[3rem] bg-[#EBEDEF]  placeholder:text-black focus:outline-none"
                        type="text"
                        placeholder="New Theme"
                        ref={inputRef}
                        value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <button
                        onClick={focusInput}>
                        <img draggable={false} className="inline-block w-5 h-5" src={editImg} alt="edit" />
                    </button>
                </div>
                <Divider />
                <div className="flex flex-row h-full ">
                    <div className="flex flex-col w-[70%] h-full ">
                        <div className="flex flex-col h-[80%]">
                            <h3>Template description</h3>
                            <Flex vertical gap={32}>
                                <TextArea
                                    allowClear
                                    showCount
                                    maxLength={200}
                                    onChange={onChange}
                                    placeholder="This is a greeting exercise"
                                    autoSize
                                    style={{ height: 60, width: 280, resize: 'none' }} />
                            </Flex>

                        </div>
                        <div className="flex uppercase place-self-end">next</div>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <TestSteps />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTheme