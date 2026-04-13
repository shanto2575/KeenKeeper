import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#244d3f] h-70 '>
            <div className=' text-white flex flex-col items-center justify-center space-y-5 lg:pt-6 border-b border-dashed container mx-auto'>
                <h2 className='text-6xl font-bold'>KeenKeeper</h2>
                <p className='text-gray-400 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='space-y-3 mb-4'>
                    <h2>Social Links</h2>
                    <div className='flex gap-3 '>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex justify-between text-white lg:my-5'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex lg:gap-3'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
