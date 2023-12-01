import React, { useContext } from 'react'
import Appcontext from '../context/Appcontext'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Authcontext from '../context/Authcontext'
import { logOut } from '../api/Auth'
import { Toaster } from 'react-hot-toast'

export const Navbar = ({bgColor}) => {
    const {setOpenLogin,setOpenSignup} = useContext(Appcontext);
    const {isAuthenticated,change,setChange,user} = useContext(Authcontext);
    const handleLogout = async () => {
        try {
            await logOut();
            setChange(!change)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(isAuthenticated)
    // console.log(user?.profileURL)
    return (
        <div>
        <Toaster/>
            <nav class="bg-[#000000] bg-opacity-20" style={{backgroundColor:bgColor}}>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 justify-center items-center md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                            <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li class="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <NavLink to={'/blogs'}>Posts</NavLink>
                            </li>
                            <li class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <NavLink to={'/myblogs'}>My Posts</NavLink>
                            </li>
                            {!isAuthenticated?<li>
                                <button type="button" class="px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setOpenLogin("block")}>Login</button>
                            </li>:<li>
                                <button type="button" class="text-white font-medium border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 text-center" onClick={handleLogout}>LOGOUT</button>
                            </li>}
                            {!isAuthenticated?<li>
                                <button type="button" class="text-white font-medium border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 text-center" onClick={()=>setOpenSignup("block")}>Signup</button>
                            </li>:<img class="w-10 h-10 rounded-full" src={user?.profileURL} alt="Rounded avatar" />}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
