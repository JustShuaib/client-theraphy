/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react'
import editImg from '../../assets/edit-3-svgrepo-com.svg'

const TitleInput = ({ title, setTitle, endpoint, placeholder }) => {
    const [titleColor, setTitleColor] = useState()
    const inputRef = useRef(null);


    const { data, error } = useQuery({
        queryKey: ['title'],
        queryFn: async () => {
            const response = await fetch(endpoint)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            console.log(`response of check page existence`)
            console.log(response)
            const jsonResponse = await response.json();
            const match = jsonResponse.exists
            console.log(`this is the used data, should be boolean(true or false): `)
            console.log(match)
            return match
        }
    })
    if (error)
        console.log(error)


    const focusInput = () => {
        // Focus the input element when the button is clicked
        inputRef.current.focus();
    }

    const handleChange = async (e) => {
        setTitle(e.target.value);
        setTimeout(async () => {
            setTitleColor(await data ? ('red-500', console.log('name is unavailable')) : ('black', console.log('name is available ')))
        }, 800)
    }

    useEffect(() => {
        console.log('this is a check to see if titleColor is set ')
        console.log(titleColor)
    }, [titleColor])
    
    return (
        <div className='flex flex-row'>
            {/* thema title */}
            {/* Nieuwe Pagina */}
            <input
                className={`text-4xl font-semibold text-${titleColor} w-[16.5rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none`}
                type="text"
                placeholder={placeholder}
                ref={inputRef}
                value={title} onChange={(e) => { handleChange(e) }} />
            <button
                onClick={focusInput}>
                <img draggable={false} className="inline-block w-5 h-5" src={editImg} alt="edit" />
            </button>
        </div>
    )
}

export default TitleInput