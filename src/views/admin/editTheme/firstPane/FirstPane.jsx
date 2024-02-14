/* eslint-disable react/prop-types */
import { Divider } from 'antd';
import { useRef } from 'react';
import editImg from "./../../../../assets/edit-3-svgrepo-com.svg"
import FirstPaneBody from './FirstPaneBody';



const FirstPane = ({ title, setTitle, current, setCurrent, blockCount, setBlockCount, isOpen, setIsOpen }) => {
    const inputRef = useRef(null);
    const focusInput = () => {
        // Focus the input element when the button is clicked
        inputRef.current.focus();
    }

    //this contains the title, divider and FirstPaneBody elements
    return (
        <div className="pt-12 h-full w-[70%]">
            <div className="flex flex-col justify-start h-[20%]">
                <div className='flex flex-row'>
                    <input
                        className="text-4xl font-semibold text-black w-[16rem] h-[3rem] bg-[#EBEDEF]  placeholder:text-black focus:outline-none"
                        type="text"
                        placeholder="New Theme"
                        ref={inputRef}
                        value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <button
                        onClick={setBlockCount(blockCount++)}>
                        <img draggable={false} className="inline-block w-5 h-5" src={editImg} alt="edit" />
                    </button>
                </div>
                <Divider />
            </div>
            <div className='h-[80%]'>
                <FirstPaneBody blockCount={blockCount} current={current} setCurrent={setCurrent} setBlockCount={setBlockCount} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )

}

export default FirstPane