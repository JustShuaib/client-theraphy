import { Link } from "react-router-dom"

export const Landing = () => {
  return (
    <div className="w-full h-screen pt-12 pl-8 mx-auto bg-white">
      <div className="grid grid-cols-1 gap-20 mx-auto sm:grid-cols-3 ">
        <Link className="h-fit w-fit" to="/admin">
          <button className="flex flex-col w-[16rem] h-[4rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
            <p className="w-full p-6 text-3xl font-semibold text-end ">Client</p>
          </button>
        </Link>

        <Link className="h-fit w-fit" to="/admin">
          <button className="flex flex-col w-[16rem] h-[4rem] rounded-md bg-black text-white bg-gradient-to-br from-orange-300 to-orange-700">
            <p className="w-full p-6 text-3xl font-semibold text-end">Therapist</p>
          </button>
        </Link>

        <Link className="h-fit w-fit" to="/admin">
          <button className="flex flex-col w-[16rem] h-[4rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
            <p className="w-full p-6 text-3xl font-semibold text-end">Admin</p>
          </button>
        </Link>

      </div>
    </div>
  )
}
