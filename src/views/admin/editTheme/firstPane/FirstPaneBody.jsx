/* eslint-disable react/prop-types */
import { Flex, Input } from 'antd';
import BlockCard from '../BlockCard';

const { TextArea } = Input;
const FirstPaneBody = ({ blockCount, setBlockCount, current, setCurrent }) => {

    const generateBlocks = () => {
        const blocks = [];

        for (let i = 1; i <= blockCount; i++) {
            blocks.push(
                <button
                    onClick={() =>{ setCurrent(current+ 1)}}
                    key={i} className="w-fit h-fit">
                    <BlockCard index={i} />
                </button>
            );
        }

        return (
            <div className="relative grid w-full grid-cols-1 gap-5 pt-8 mx-auto overflow-y-scroll text-lg md:grid-cols-2">
                {blocks}
            </div>
        );
    };


    return (
        <div className='overflow-hidden'>
            <div className='relative flex flex-col'>
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
                <div>
                    {generateBlocks()}
                </div>
            </div>
        </div>

    )
}

export default FirstPaneBody