/* eslint-disable react/prop-types */
// import { Flex, Input } from 'antd';
// import BlockCard from '../BlockCard';
// import AudioPlayer from './AudioPlayer';
import SearchResult from './SearchResult';

// const { TextArea } = Input;

const FirstPaneBody = ({ pickedSearch }) => {
    // setCurrentBlock, blockCount, setBlockCount, current, setCurrent

    // const generateBlocks = () => {

    //     const handleClick = (i, current) => {
    //         setCurrent(current + 1)
    //         setCurrentBlock(i)
    //         console.log(i)
    //     }

    //     const blocks = [];

    //     for (let i = 1; i <= blockCount; i++) {
    //         blocks.push(
    //             <button
    //                 onClick={() => {
    //                     handleClick(i, current)
    //                 }}
    //                 key={i} className="w-fit h-fit">
    //                 <BlockCard index={i} />
    //             </button>
    //         );
    //     }

    //     return (
    //         <div className="relative grid w-full grid-cols-1 gap-5 pt-8 mx-auto overflow-y-scroll text-lg md:grid-cols-2">
    //             {blocks}
    //         </div>
    //     );
    // };


    return (
        <div className='overflow-hidden'>
            <div className='relative flex flex-col w-full gap-4 pt-8 overflow-scroll overflow-x-hidden'>
                {/* <div className='flex flex-col'>
                    <h3 className="pb-2">Aantal Oefenblokken</h3>
                    <Flex vertical gap={32}>
                        <div className='flex flex-row'>
                            <TextArea
                                allowClear
                                maxLength={200}
                                onChange={(e) => { setBlockCount(e.target.value) }}
                                placeholder='Enter a number'
                                autoSize
                                value={blockCount}
                                style={{ height: 60, width: 200, resize: 'none' }} />
                            <button
                                onClick={generateBlocks}
                                className='px-2 ml-1 text-white rounded-md bg-gradient-to-b from-blue-500 to-blue-800'>generate</button>
                        </div>
                    </Flex>
                </div> */}
                {/* <div className='w-full'>
                    {generateBlocks()}
                </div> */}
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