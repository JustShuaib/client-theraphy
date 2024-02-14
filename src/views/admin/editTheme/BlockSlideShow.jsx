/* eslint-disable react/prop-types */
const BlockSlideShow = ({ blockCount }) => {

    return (
        <div className="h-fit w-fit pb-4 hidden md:flex flex-row gap-5 overflow-scroll">
            <div className="relative flex flex-col content-end justify-end rounded-lg h-12 w-36 bg-gradient-to-br from-blue-300 to-blue-800">
                <img className="absolute z-10 w-full h-full object-cover opacity-70 rounded-lg" src="/vector.jpg" alt="" />
                <h2 className='z-20 px-4 text-xl font-bold w-fit'>Block </h2>
            </div>
            <div className="relative flex flex-col content-end justify-end rounded-lg h-12 w-36 bg-gradient-to-br from-blue-300 to-blue-800">
                <img className="absolute z-10 w-full h-full object-cover opacity-70 rounded-lg" src="/vector.jpg" alt="" />
                <h2 className='z-20 px-4 text-xl font-bold w-fit'>Block </h2>
            </div>
            <div className="relative flex flex-col content-end justify-end rounded-lg h-12 w-36 bg-gradient-to-br from-blue-300 to-blue-800">
                <img className="absolute z-10 w-full h-full object-cover opacity-70 rounded-lg" src="/vector.jpg" alt="" />
                <h2 className='z-20 px-4 text-xl font-bold w-fit'>Block </h2>
            </div>
        </div>
    )
}

export default BlockSlideShow