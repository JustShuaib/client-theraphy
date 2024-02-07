import { Link } from "react-router-dom"

const Theme = () => {
  return (
    <div className="w-full h-screen pt-24 pl-8 mx-auto bg-white p-">
      <div className="grid grid-cols-3 gap-20">
        <button
          className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <Link to='/admin/theme/edit'>
            <p className="p-6 text-3xl font-semibold text-center">Create new theme +</p>
          </Link>
        </button>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 1</p>
        </div>
        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 2</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 3</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 4</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 5</p>
        </div>
      </div>
    </div>
  )
}

export default Theme