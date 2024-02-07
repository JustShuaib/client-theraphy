import { useState } from "react"

const EditTheme = () => {
    const [title, setTitle] = useState('')

    return (
        <div className="w-full h-screen pt-24 pl-8 mx-auto bg-white">
            <input
                className="text-4xl font-semibold text-black placeholder:text-black focus:border-none hover:border-none"
                type="text"
                placeholder="Current Theme"
                value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <h1 className=""></h1>
        </div>
    )
}

export default EditTheme