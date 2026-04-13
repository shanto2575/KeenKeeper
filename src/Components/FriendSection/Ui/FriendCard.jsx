import React from 'react'

const FriendCard = ({ friend }) => {

    const { name, picture, days_since_contact, status, tags } = friend;

    const style = (status) => {
        if (status === 'overdue') {
            return 'bg-red-500 text-white px-3 py-1 rounded-full  font-semibold'
        }
        if (status === 'almost due') {
            return 'bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold'
        }
        if (status === 'on-track') {
            return 'bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold'
        }
    }

    return (
        <div className='p-5 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.25)] h-80 flex flex-col items-center justify-center space-y-4'>
            <img src={picture} alt={name} className='rounded-full w-20 h-20' />
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='text-gray-400'>{days_since_contact} days ago</p>
            <div className='flex gap-2 flex-wrap justify-center'>
                {
                    tags.map((tag, index) => (
                        <span key={index} className='bg-green-200 px-2 py-1 rounded-full text-sm'>
                            {tag}
                        </span>
                    ))
                }
            </div>
            <span className={style(status)}>
                {status}
            </span>
        </div>
    )
}

export default FriendCard