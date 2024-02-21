/* eslint-disable react/prop-types */
// import { Flex, Input } from 'antd';
// import BlockCard from '../BlockCard';
// import AudioPlayer from './AudioPlayer';
import SearchResult from './SearchResult';
// const { TextArea } = Input;

const FirstPaneBody = ({ pickedSearch, setPickedSearch }) => {

    const updateOption = (newOption, name) => {
        setPickedSearch(prevData => {
            // Find the index of the object with the given id
            const index = prevData.findIndex(item => item.name === name);

            if (index !== undefined) {
                // Make a copy of the array
                const newData = [...prevData];
                // Update the value of the option in the object at the found index
                newData[index] = { ...newData[index], option: newOption };
                return newData;
            }

            return prevData;
        });
    }

    return (
        <div className='overflow-hidden'>
            <div className='relative flex flex-col w-full gap-4 pt-8 overflow-scroll overflow-x-hidden'>
                {
                    pickedSearch && pickedSearch.map((search) => {
                        return (
                            <div key={search.name} className='w-fit h-fit'>
                                <SearchResult name={search.name} handleOption={updateOption} audio={search.audio} video={search.video} image={search.image} options={search.options} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default FirstPaneBody