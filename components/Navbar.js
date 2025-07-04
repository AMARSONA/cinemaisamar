"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    return (
        <nav className=' text-black flex justify-between items-center px-4 md:h-16'>

            <Link href={"/"} className='logo font-bold text-lg flex justify-center items-center'>
                <img className='invertImg' src="/cinema.gif" width={44} alt="" />
                <span className='text-xl md:text-base my-3 md:my-0 text-white'>CinemaisAmar</span></Link>
            {/* <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}

            <div className='relative flex justify-center items-center  md:block gap-4'>
                {session && <>
                    <button onClick={() => { setShowdropdown(!showdropdown) }} id="dropdownDefaultButton" onBlur={() => {
                        setTimeout(() => {
                            setShowdropdown(false)
                        }, 100);
                    }} data-dropdown-toggle="dropdown" className=" mx-4 text-white bg-transparent border-2 hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center inline-flex items-center  dark:focus:ring-blue-800" type="button">Account {/*Welcome session.user.email*/} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 text-white bg-transparent hover:bg-gray-400 hover:text-black">New User Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="block px-4 py-2 text-white bg-transparent hover:bg-gray-400 hover:text-black">Your Page</Link>
                            </li>
                            <li>
                                <Link onClick={() => signOut()} href={"/login"} className="block px-4 py-2 text-white bg-transparent hover:bg-gray-400 hover:text-black">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </>}
                {/* {session && (<Link href={"/dashboard"}>
                    <button className='"text-white bg-gradient-to-br
         from-purple-600 to-blue-500 
         hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
          focus:ring-blue-300 dark:focus:ring-blue-800 
          font-medium rounded-lg text-sm px-5 py-2.5 
          text-center me-2 mb-2'>Dashboard</button></Link>)} */}

                {session && (<button className='text-white bg-transparent border-2 hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => { signOut( { callbackUrl: "/" })}}>New Login</button>)}
                {!session && <Link href={"/"}><button className='text-white bg-transparent border-2 hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Home</button></Link>}
                {!session && <Link href={"/login"}><button className='text-white bg-transparent border-2 hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button></Link>}
                    {/* <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button></Link>} */}
            </div>
        </nav>
    )
}

export default Navbar
