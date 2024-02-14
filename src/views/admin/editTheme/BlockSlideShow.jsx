/* eslint-disable react/prop-types */
const BlockSlideShow = () => {

    return (
        <div className="flex-row hidden gap-5 pb-4 overflow-scroll h-fit w-fit md:flex">
            <div className="relative flex flex-col content-end justify-end h-12 rounded-lg w-36 bg-gradient-to-br from-blue-300 to-blue-800">
                <img className="absolute z-10 object-cover w-full h-full rounded-lg opacity-70" src="/vector.jpg" alt="" />
                <h2 className='z-20 px-4 text-xl font-bold w-fit'>Block </h2>
            </div>
            <div className="relative flex flex-col content-end justify-end h-12 rounded-lg w-36 bg-gradient-to-br from-blue-300 to-blue-800">
                <img className="absolute z-10 object-cover w-full h-full rounded-lg opacity-70" src="/vector.jpg" alt="" />
                <h2 className='z-20 px-4 text-xl font-bold w-fit'>Block </h2>
            </div>
            <div className="relative flex flex-col content-end justify-end h-12 rounded-lg w-36 bg-gradient-to-br from-blue-300 to-blue-800">
                <img className="absolute z-10 object-cover w-full h-full rounded-lg opacity-70" src="/vector.jpg" alt="" />
                <h2 className='z-20 px-4 text-xl font-bold w-fit'>Block </h2>
            </div>
        </div>
    )
}

export default BlockSlideShow