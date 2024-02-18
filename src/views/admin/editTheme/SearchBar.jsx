/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
const { Search } = Input;


const SearchBar = ({ searchResult, setSearchResult }) => {
    const [searchValue, setSearchValue] = useState('')
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const { data, error } = useQuery({
        queryKey: ['search'],
        queryFn: async () => {
            const response = await fetch('api/dynamic_search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchValue),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const jsonResponse = await response.json()
            const searchResponse = jsonResponse.results
            console.log('the response of the search query is this:')
            console.log(searchResponse)
            // search response in itself is expected to be a list of key-value pairs.
            return searchResponse
        }
    })


    useEffect(() => {
        setSearchResult(data)
    }, [data, setSearchResult])

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="relative w-full h-fit">
            <div className='z-40 w-full'>
                <Search
                    onChange={(e) => { setSearchValue(e.target.value) }}
                    value={searchValue}
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: '100%' }} />
            </div>
            <div className='relative z-10 w-full overflow-y-scroll bg-white rounded-lg shadow-md h-36'>
                {searchResult.map((searchResult) => {
                    return (
                        <div key={searchResult} className='flex flex-row items-center justify-between w-full h-10 px-2 border-b-2'>
                            <p className='text-lg font-semibold capitalize'>{searchResult}</p>
                            {/* <div className='flex flex-col justify-end h-full'>
                        <p className='text-sm opacity-55'> from family</p>
                    </div> */}
                        </div>
                    )
                })}

                {/* <div className='flex flex-row items-center justify-between w-full h-10 px-2 border-b-2'>
                    <p className='text-lg font-semibold capitalize'>brother</p>
                    <div className='flex flex-col justify-end h-full'>
                        <p className='text-sm opacity-55'> from family</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between w-full h-10 px-2 border-b-2'>
                    <p className='text-lg font-semibold capitalize'>brother</p>
                    <div className='flex flex-col justify-end h-full'>
                        <p className='text-sm opacity-55'> from family</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between w-full h-10 px-2 border-b-2'>
                    <p className='text-lg font-semibold capitalize'>brother</p>
                    <div className='flex flex-col justify-end h-full'>
                        <p className='text-sm opacity-55'> from family</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between w-full h-10 px-2 border-b-2'>
                    <p className='text-lg font-semibold capitalize'>brother</p>
                    <div className='flex flex-col justify-end h-full'>
                        <p className='text-sm opacity-55'> from family</p>
                    </div>
                </div> */}

            </div>
            {/* <div className='flex flex-row w-full h-8 pl-4 bg-white rounded-lg'>
                <input className='w-[95%] focus:outline-none rounded-lg' type="text" name="" id="" />
                <button className='w-[5%]'></button>
            </div> */}
        </div>
    )
}

export default SearchBar