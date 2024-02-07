// import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const Admin = () => {
    // const [mode, setMode] = useState('')

    return (
        <div className="flex flex-row ">
            <div className="flex flex-col w-64 h-screen p-4 text-white bg-black">
                <div className="flex flex-row content-center mt-6 mb-8 text-black bg-white">
                    <div className="w-12 h-12 rounded-full">
                        <img className="w-12 h-12 rounded-full" src="/vector.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-center h-full text-xl font-medium">Admin</div>
                </div>
                <button
                    // onClick={setMode()}
                    className="flex flex-col justify-center w-full h-12 text-black bg-white rounded-md">
                    <Link to='theme'>
                        <p className="pl-4 text-xl font-semibold"> Theme  </p>
                    </Link>
                </button>
            </div>
            <Outlet />
        </div>
    )
}

export default Admin