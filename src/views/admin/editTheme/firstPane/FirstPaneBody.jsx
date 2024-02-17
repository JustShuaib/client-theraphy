/* eslint-disable react/prop-types */
import { Flex, Input } from 'antd';
import BlockCard from '../BlockCard';
import AudioPlayer from './AudioPlayer';
import { useQuery } from '@tanstack/react-query';

const { TextArea } = Input;
const FirstPaneBody = ({ setCurrentBlock, blockCount, setBlockCount, current, setCurrent }) => {


    const generateBlocks = () => {

        const handleClick = (i, current) => {
            setCurrent(current + 1)
            setCurrentBlock(i)
            console.log(i)
        }

        const blocks = [];

        for (let i = 1; i <= blockCount; i++) {
            blocks.push(
                <button
                    onClick={() => {
                        handleClick(i, current)
                    }}
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
                <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
                    <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
                    <div className='flex flex-row justify-between px-12'>
                        <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='object-contain w-full h-full' src="" alt="" />
                        </div>
                        <AudioPlayer audioSrc={'s'} />
                        <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />

                            <video className='absolute object-contain w-full h-full ' src="ee"></video>
                        </div>
                    </div>
                </div>
                <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
                    <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
                    <div className='flex flex-row justify-between px-12'>
                        <div className='flex flex-col justify-center gap-4'>
                            <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                                <img className='object-contain w-full h-full' src="" alt="" />
                            </div>
                            <input
                                // onClick={}
                                checked={true}
                                type="radio" name="" id="" />
                        </div>
                        <div className='flex flex-col justify-center gap-4'>
                            <AudioPlayer audioSrc={'s'} />
                            <input type="radio" name="" id="" />
                        </div>
                        <div className='flex flex-col justify-center gap-4'>
                            <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                                <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />

                                <video className='absolute object-contain w-full h-full ' src="ee"></video>
                            </div>
                            <input type="radio" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
                    <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
                    <div className='flex flex-row justify-between px-12'>
                        <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='object-contain w-full h-full' src="" alt="" />
                        </div>
                        <AudioPlayer audioSrc={'s'} />
                        <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />

                            <video className='absolute object-contain w-full h-full ' src="ee"></video>
                        </div>
                    </div>
                </div>
                <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
                    <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
                    <div className='flex flex-row justify-between px-12'>
                        <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='object-contain w-full h-full' src="" alt="" />
                        </div>
                        <AudioPlayer audioSrc={'s'} />
                        <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />

                            <video className='absolute object-contain w-full h-full ' src="ee"></video>
                        </div>
                    </div>
                </div>
                <div className='w-full py-8 bg-purple-500 rounded-lg h-fit'>
                    <h3 className='w-full text-2xl font-semibold text-center'>Brother</h3>
                    <div className='flex flex-row justify-between px-12'>
                        <div className='w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='object-contain w-full h-full' src="" alt="" />
                        </div>
                        <AudioPlayer audioSrc={'s'} />
                        <div className='flex flex-row justify-center w-20 h-20 bg-[#ADB5BD] bg-opacity-50 rounded-md'>
                            <img className='w-12' src="/play-svgrepo-com.svg" alt="audio svg" />
                            <video className='absolute object-contain w-full h-full ' src="ee"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstPaneBody