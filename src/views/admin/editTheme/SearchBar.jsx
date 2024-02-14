import { useQuery } from '@tanstack/react-query';
import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;


const SearchBar = () => {
    const { searchData, searchError } = useQuery({
        queryKey: ['search'],
        queryFn: async () => {
            const response = await fetch('api/dynamic_search')
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
    const [searchValue, setSearchValue] = useState('')
    const onSearch = (value, _e, info) => console.log(info?.source, value);


    return (
        <div className="w-full h-fit">
            <Search
                onChange={(e) => { setSearchValue(e.target.value) }}
                value={searchValue}
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 680 }} />
        </div>
    )
}

export default SearchBar