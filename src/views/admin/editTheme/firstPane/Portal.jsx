/* eslint-disable react/prop-types */
import { Dialog } from '@headlessui/react'
import { Input } from 'antd';
const { Search } = Input;

const Portal = ({ setIsOpen, isOpen }) => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <Dialog
            open={isOpen}
            onClose={setIsOpen}
            as="div"
            className={`absolute inset-0 z-10 overflow-y-auto flex justify-center items-center ${isOpen && " "} `}
        >
            <div className="flex flex-col w-[50%] h-full px-4 py-8 text-center text-white bg-gray-800 opacity-100">
                <Dialog.Overlay />

                <Dialog.Title className="text-3xl text-purple-500">
                    Search audio
                </Dialog.Title>

                <p className="m-4 text-md">
                    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 680, height: 300 }} />
                </p>

                <button
                    className="inline-flex justify-center w-full px-4 py-2 m-4 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                >
                    Deactivate
                </button>
                <button
                    className="inline-flex justify-center w-full px-4 py-2 m-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                >
                    Cancel
                </button>
            </div>
        </Dialog>
    )
}

export default Portal

