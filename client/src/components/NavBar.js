import { MdOutlineCategory } from 'react-icons/md'
import { FaStream } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'

function NavBar() {
    return (
        <div className="sys-app-notCollapsed ">
            <div className="p-4 w-full lg:w-1/1">
                <div className="h-10 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize flex flex-column items-center relative">
                    <span className="px-2 mr-2 border-r border-gray-400 cursor-pointer">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b26e2887240561.5e756150d3e0e.gif" alt="alt placeholder" className="w-8 h-8 -mt-1 inline mx-auto object-cover rounded-full" />
                    </span>
                    <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded flex items-center">
                        <span><FaStream className='w-8 rounded-full' /></span>
                        <span className="mx-1">Menu</span>
                    </span>
                    <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded flex items-center">
                        <span><MdOutlineCategory className='w-8 text-lg rounded-full' /></span>
                        <span className="mx-1">Categories</span>
                    </span>
                    <div className='px-1 w-8 relative cursor-pointer hover:text-gray-700 rounded-full flex absolute left-0'>
                        <span className='px-1 w-8 relative cursor-pointer hover:text-gray-700 rounded-full'>
                            <IoIosNotificationsOutline className="w-8 fas text-2xl rounded-full" />
                            <span className='absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white text-center w-4 h-4 shadow-lg rounded-full'>3</span>
                        </span>
                        <span className="px-1 cursor-pointer hover:bg-gray-200 py-1 rounded">
                            <BiSearchAlt className='rounded-full text-xl bg-grey w-20' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar