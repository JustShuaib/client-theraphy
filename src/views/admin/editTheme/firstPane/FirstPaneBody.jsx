/* eslint-disable react/prop-types */
// import { Flex, Input } from 'antd';
// import BlockCard from '../BlockCard';
// import AudioPlayer from './AudioPlayer';
import SearchResult from './SearchResult';

// const { TextArea } = Input;

const FirstPaneBody = ({ pickedSearch }) => {
    
    return (
        <div className='overflow-hidden'>
            <div className='relative flex flex-col w-full gap-4 pt-8 overflow-scroll overflow-x-hidden'>
             
                {
                    pickedSearch && pickedSearch.map((search) => {
                        return (
                            <div key={search} className='w-fit h-fit'>
                                <SearchResult audio={search.audio} video={search.video} image={search.image} options={search.options} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default FirstPaneBody