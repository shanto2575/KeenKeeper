import React from 'react'
import { FaHome, FaTimes } from 'react-icons/fa'
import { FaTimeline } from 'react-icons/fa6'
import { ImStatsDots } from 'react-icons/im'
import { IoTimeOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router'
const Navbar = () => {
    const link = <>
        <li><NavLink to={'/'} className={({isActive})=>`font-semibold ${isActive ? 'bg-[#244D3F] text-white ':''}`}><FaHome></FaHome>Home</NavLink></li>
        <li><NavLink to={'/timeline'} className={({isActive})=>`font-semibold ${isActive ? 'bg-[#244D3F] text-white ':''}`}><IoTimeOutline></IoTimeOutline>Timeline</NavLink></li>
        <li><NavLink to={'/stats'} className={({isActive})=>`font-semibold ${isActive ? 'bg-[#244D3F] text-white ':''}`}><ImStatsDots></ImStatsDots> Stats</NavLink></li>
    </>
    return (
        <Link to={'/'} className="navbar bg-base-100 flex justify-between px-5 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div> 
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                    </ul>
                </div>
                <a className=" text-2xl text-black font-bold">Keen<span className='text-green-950'>Keeper</span></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-5 space-x-5">
                    {link}
                </ul>
            </div>
        </Link>
    )
}

export default Navbar