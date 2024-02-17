/* eslint-disable react/prop-types */
import { Divider } from 'antd';
import FirstPaneBody from './FirstPaneBody';
import SearchBar from '../SearchBar';
import TitleInput from '../../../../components/titleInput/TitleInput';


const FirstPane = ({ title, setTitle, setCurrentBlock, current, setCurrent, blockCount, setBlockCount, isOpen, setIsOpen }) => {


    //this contains the title, divider and FirstPaneBody elements
    return (
        <div className="w-full h-full pt-12">
            <div className="sticky top-0 flex flex-col justify-start h-[20%]">
                <TitleInput title={title} setTitle={setTitle} endpoint=''/>
                <Divider />
            </div>
            <div className='h-[80%]'>
                <SearchBar />
                <FirstPaneBody setCurrentBlock={setCurrentBlock} blockCount={blockCount} current={current} setCurrent={setCurrent} setBlockCount={setBlockCount} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )

}

export default FirstPane