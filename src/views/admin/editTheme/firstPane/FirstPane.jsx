/* eslint-disable react/prop-types */
import { Divider } from 'antd';
import FirstPaneBody from './FirstPaneBody';
import SearchBar from '../SearchBar';
import { useState } from 'react';


const FirstPane = ({ themeName }) => {

    const [searchResult, setSearchResult] = useState([])
    const [pickedSearch, setPickedSearch] = useState([])


    //this contains the title, divider and FirstPaneBody elements
    return (
        <div className="w-full h-full pt-12">
            <div className="sticky top-0 flex flex-col justify-start h-[20%]">
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
}
// this component embodies the search bar and search results

export default FirstPane