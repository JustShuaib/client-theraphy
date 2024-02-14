/* eslint-disable react/prop-types */
import { Flex, Input } from 'antd';
import { useState } from 'react';
import Portal from './firstPane/Portal';
import SearchPane from './SearchPane';

const { TextArea } = Input;
const FirstPane = ({isOpen, setIsOpen}) => {

    const [blockCount, setBlockCount] = useState('');


    const generateBlocks = () => {
        const blocks = [];

        for (let i = 1; i <= blockCount; i++) {
            blocks.push(
                <button
                    onClick={() => setIsOpen(true)}
                    key={i} className="flex flex-col content-end justify-end w-40 h-20 px-4 rounded-md bg-gradient-to-br from-blue-300 to-blue-800">
                    <h2 className='w-fit'>Block {i}</h2>
                </button>
            );
        }

        return (
            <div className="relative grid w-full grid-cols-3 gap-5 pt-8 text-lg ">
                {blocks}
            </div>
        );
    };


    return (
        <div>
            {!isOpen ? (
                <div className='relative flex flex-col'>
                    <Portal setIsOpen={setIsOpen} isOpen={isOpen} />
                    <div className='flex flex-col'>
                        <h3 className="pb-2">Number of Exercise Blocks</h3>
                        <Flex vertical gap={32}>
                            <div className='flex flex-row'>
                                <TextArea
                                    allowClear
                                    maxLength={200}
                                    onChange={(e) => { setBlockCount(e.target.value) }}
                                    placeholder={5}
                                    autoSize
                                    value={blockCount}
                                    style={{ height: 60, width: 200, resize: 'none' }} />
                                <button
                                    onClick={generateBlocks}
                                    className='px-2 ml-1 text-white rounded-md bg-gradient-to-b from-blue-500 to-blue-800'>generate</button>
                            </div>
                        </Flex>
                    </div>
                    {generateBlocks()}
                </div>
            )
                :
                <div className='relative flex flex-col'>
                    <SearchPane />
                </div>
            }
        </div>

    )
}

export default FirstPane