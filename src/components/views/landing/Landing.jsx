import { Link } from "react-router-dom"

export const Landing = () => {
  return (
    <div className="w-full h-screen pt-24 pl-8 bg-white">
      <Link className="h-fit w-fit" to="/admin">
        <button className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white">
          <p className="p-6 text-3xl font-semibold text-center">Admin</p>
        </button>
      </Link>
    </div>
  )
}
