import React from 'react'
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {

    const {id, name, picture, days_since_contact, status, tags } = friend;

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
        <Link to={`/friendsdetails/${id}`} className='p-5 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] h-90 flex flex-col items-center justify-center space-y-4 text-center hover:shadow-amber-800'>
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
        </Link>
    )
}

export default FriendCard