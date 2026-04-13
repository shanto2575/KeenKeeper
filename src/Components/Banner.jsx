import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='container mx-auto border-b border-dashed border-gray-300'>
            <div className='flex flex-col justify-center items-center h-[300px] mx-auto space-y-7'>
                <h2 className='text-3xl lg:text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-center text-xl text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
                    relationships that matter most.</p>
                <button class="btn bg-black text-white flex gap-3 border-black">
                    <FaPlus></FaPlus>Add a Friend
                </button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 m-5 lg:mb-10 text-center'>
                <div className='space-y-3 border rounded-2xl p-5'>
                    <h2 className='text-3xl font-bold'>10</h2>
                    <h2 className='text-gray-500'>Total Friends</h2>
                </div>
                <div className='space-y-3 border rounded-2xl p-5'>
                    <h2 className='text-3xl font-bold'>3</h2>
                    <h2 className='text-gray-500'>On Track</h2>
                </div>
                <div className='space-y-3 border rounded-2xl p-5'>
                    <h2 className='text-3xl font-bold'>6</h2>
                    <h2 className='text-gray-500'>Need Attention</h2>
                </div>
                <div className='space-y-3 border rounded-2xl p-5'>
                    <h2 className='text-3xl font-bold'>12</h2>
                    <h2 className='text-gray-500'>Interactions This Month</h2>
                </div>
            </div>
        </div>
    )
}

export default Banner