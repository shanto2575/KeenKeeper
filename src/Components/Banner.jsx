import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-[400px] mx-auto space-y-7'>
                <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-center text-xl text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
                    relationships that matter most.</p>
                <button class="btn bg-black text-white flex gap-3 border-black">
                    <FaPlus></FaPlus>Add a Friend
                </button>
            </div>
        </div>
    )
}

export default Banner