import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const Layout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout