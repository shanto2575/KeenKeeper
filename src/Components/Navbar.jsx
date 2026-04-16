import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'
import { ImStatsDots } from 'react-icons/im'
import { NavLink } from 'react-router'

const Navbar = () => {

    const link = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    `font-semibold flex items-center gap-2 ${isActive ? 'bg-[#244D3F] text-white' : ''}`
                }>
                    <FaHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={({ isActive }) =>
                    `font-semibold flex items-center gap-2 ${isActive ? 'bg-[#244D3F] text-white' : ''}`
                }>
                    <IoTimeOutline /> Timeline
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) =>
                    `font-semibold flex items-center gap-2 ${isActive ? 'bg-[#244D3F] text-white' : ''}`
                }>
                    <ImStatsDots /> Stats
                </NavLink>
            </li>
        </>
    )

    return (
        <div className="navbar bg-base-100 flex justify-between px-5 shadow-sm">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        ☰
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>

                <h2 className="text-2xl font-bold">
                    Keen<span className='text-green-950'>Keeper</span>
                </h2>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-5 space-x-5">
                    {link}
                </ul>
            </div>

        </div>
    )
}

export default Navbar