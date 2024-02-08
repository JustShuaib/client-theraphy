import { Link } from "react-router-dom"
import plusImg from "./../../../assets/plus-square-svgrepo-com.svg"
const Theme = () => {
  return (
    <div className="w-full h-screen pt-24 pl-8 mx-auto">
      <div className="grid grid-cols-3 gap-20">
        <button
          className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
          <Link to='/admin/theme/edit'>
            <div className="flex flex-row">
              <div className="inline-block p-6 text-3xl font-semibold text-center">Create new theme <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
            </div>
          </Link>
        </button>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 1</p>
        </div>
        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 2</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 3</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 4</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 5</p>
        </div>
      </div>
    </div>
  )
}

export default Theme