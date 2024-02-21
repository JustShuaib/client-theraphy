/* eslint-disable react/prop-types */
import { Divider } from 'antd';
import FirstPaneBody from './FirstPaneBody';
import SearchBar from '../SearchBar';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BlocksPage from '../blocks/BlocksPage';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FirstPane = ({ themeName, currentStep, setCurrentStep, pageTitle }) => {

    const [searchResult, setSearchResult] = useState([])
    const [pickedSearch, setPickedSearch] = useState([])

    const [cols, setCols] = useState()
    const [rows, setRows] = useState()

    const navigation = useNavigate()

    const savePage = useMutation({
        mutationFn: async (pageData) => {
            const response = axios.post('/api/save_page', pageData)
            const successRes = response.json()
            return successRes.success
        }
    })

    const handleSave = async () => {
        const response = await savePage()
        const status = await response.json()
        status.success ? navigation(`/admin/theme/${themeName}`) : alert('save failed, try again.')
    }

    //controls what view shows
    const views = [{
        id: 1,
        element: (
            <div className='flex flex-row w-full h-full '>
                <div className="sticky top-0 flex w-full flex-col justify-start h-[20%]">
                    <h3 className='text-4xl font-semibold text-${titleColor} w-[16.5rem] h-[3rem] bg-[#EBEDEF] placeholder:text-black focus:outline-none'>
                        {themeName}
                    </h3>
                    <SearchBar pickedSearch={pickedSearch} setPickedSearch={setPickedSearch} searchResult={searchResult} setSearchResult={setSearchResult} />
                    <Divider />
                </div>
                <div className='h-[80%]'>
                    <FirstPaneBody pickedSearch={pickedSearch} setPickedSearch={setPickedSearch} />
                </div>
            </div>
        )
    },
    {
        id: 2,
        element: <BlocksPage pickedSearch={pickedSearch} setCols={setCols} setRows={setRows} />
        // element: <SearchPane blockCount={blockCount} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} />
    }
    ]

    const buttonViews = [
        {
            id: 1,
            element: (<motion.button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-blue-500 border rounded-lg place-self-end w-fit">NEXT</motion.button>)
        },
        {
            id: 2,
            element: (
                <motion.button
                    // onClick={() => setCurrentStep(currentStep + 1)}
                    onClick={() => { handleSave({ theme_name: themeName, page_name: pageTitle, rows: rows, columns: cols, blocks: pickedSearch }) }}
                    className="flex px-4 py-2 text-lg font-semibold text-white uppercase bg-blue-500 border rounded-lg place-self-end w-fit"> Complete </motion.button>)
        }
    ]

    //this contains the title, divider and FirstPaneBody elements
    return (
        <div className="flex flex-row w-full h-full px-12">
            <div className='flex flex-row w-[80%] h-full '>
                {views.map((view) => {
                    return (
                        (view.id) === currentStep + 1 && (<div key={view.id} className="w-full h-screen overflow-hidden ">{view.element}</div>)
                    )
                })}

            </div>
            <div className="flex flex-col w-[20%] h-full content-end justify-end ">
                <div className="flex flex-col justify-end w-full h-full pl-4">
                    {buttonViews.map((view) => {
                        return (
                            (view.id) === currentStep + 1 && (<div key={view.id} className="self-end h-screen overflow-hidden justify-self-end ">{view.element}</div>)
                        )
                    })}
                </ div>
            </div>
        </div>
    )
}
// this component embodies the search bar and search results

export default FirstPane