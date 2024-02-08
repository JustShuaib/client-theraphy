import { Link } from "react-router-dom"
import userImg from "./../../assets/user-svgrepo-com.svg"
import themeImg from "./../../assets/grid-plus-svgrepo-com.svg"
const Navbar = () => {
    return (
        <div className="flex flex-col h-screen px-4 pt-6 text-black bg-white min-w-60 max-w-60">
            <div className="pb-6 text-xl font-semibold">logopediemateriaal</div>
            <div className="flex flex-row justify-between gap-4 text-black bg-white content-baseline w-fit">
                <div className="w-12 h-12 rounded-full">
                    <img className="w-10 h-10 rounded-full" src={userImg} alt="user icon" />
                </div>
                <div className="flex flex-col justify-center h-full text-xl font-medium">Admin</div>
            </div>
            <div className="pt-4">
                <div className="pb-2 text-lg uppercase ">actions</div>
                <Link
                    className="w-fit h-fit"
                    to='theme'>
                    <button
                        // onClick={setMode()}
                        className="flex flex-col justify-center w-full h-12 text-white bg-white rounded-md bg-gradient-to-br from-purple-400 to-purple-700">
                        <div className="flex flex-row justify-start pl-4 ">
                            <img className="h-7 w-7" src={themeImg} alt="theme-icon" />
                            <p className="pl-2 text-lg font-semibold "> Theme  </p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar