import BlockSlideShow from './BlockSlideShow';
import SearchBar from './SearchBar';
const SearchPane = () => {
    return (
        // <div className="grid w-full grid-cols-3 gap-5 overflow-y-clip">
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        //     <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">hhtht</div>
        // </div>
        <div>
            <BlockSlideShow />
            <div className="overflow-x-scroll w-fit">
            </div>
            <div className="h-[10%]">
                <SearchBar />
                <div className="px-4 py-4 rounded-lg min-w-28 max-w-44 h-fit bg-gradient-to-br from-blue-300 to-blue-700">

                </div>
            </div>
        </div>
    )
}

export default SearchPane