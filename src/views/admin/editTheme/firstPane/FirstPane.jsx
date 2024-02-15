/* eslint-disable react/prop-types */
import { Divider } from 'antd';
import { useRef } from 'react';
import editImg from "./../../../../assets/edit-3-svgrepo-com.svg"
import FirstPaneBody from './FirstPaneBody';
import { useQuery } from '@tanstack/react-query';

const FirstPane = ({ title, setTitle, current, setCurrent, blockCount, setBlockCount, isOpen, setIsOpen }) => {
    const inputRef = useRef(null);
    const focusInput = () => {
        // Focus the input element when the button is clicked
        inputRef.current.focus();
    }

    const handleChange = async (e) => {
        setTitle(e.target.value);
        setTimeout(async () => {
            const boolean = await data;
            boolean ? alert('this name already taken') : alert('this name is available')
        }, 800)
    }

    const { data, error } = useQuery({
        queryKey: ['title'],
        queryFn: async () => {
            const response = await fetch('/api/check_page_existence')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            console.log(`response of check page existence`)
            console.log(response)
            const jsonResponse = await response.json();
            console.log(`this is the used data, should be boolean(true or false): `)
            console.log(jsonResponse)
            return jsonResponse
        }
    })
    if (error)
        console.log(error)

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
                        value={title} onChange={(e) => { handleChange(e) }} />
                    <button
                        onClick={focusInput}>
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