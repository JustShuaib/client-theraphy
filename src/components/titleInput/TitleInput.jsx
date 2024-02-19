/* eslint-disable react/prop-types */
import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react'
import editImg from '../../assets/edit-3-svgrepo-com.svg'
import axios from 'axios'

const TitleInput = ({ title, setTitle, endpoint, placeholder }) => {
    const [titleColor, setTitleColor] = useState()
    const [prevText, setPrevText] = useState("");

    const inputRef = useRef(null);

    const checkTitle = useMutation({
        mutationFn: ((title) => {
            return axios.post(endpoint, title)
        })
    })

    const focusInput = () => {
        // Focus input element
        inputRef.current.focus();
    }

    useEffect(() => {
        title !== prevText && (checkTitle.mutate({ theme_name: title }),
            checkTitle.isError && console.log(checkTitle.error.message),
            setTitleColor(checkTitle.data ? ('red-500', console.log('name is unavailable')) : ('black', console.log('name is available ')))
        )
        setPrevText(title)
    }, [title, prevText, checkTitle])

    return (
        <div className='flex flex-row'>
            {/* thema title */}
            {/* Nieuwe Pagina */}
            <input
                className={`text-4xl font-semibold text-${titleColor} w-[16.5rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}
                type="text"
                placeholder={placeholder}
                ref={inputRef}
                value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <button
                onClick={focusInput}>
                <img draggable={false} className="inline-block w-5 h-5" src={editImg} alt="edit" />
            </button>
        </div>
    )
}

export default TitleInput