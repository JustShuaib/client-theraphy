// import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/navbar"

const Admin = () => {
    // const [mode, setMode] = useState('')

    return (
        <div className="flex flex-row bg-[#EBEDEF] font-open-sans">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Admin