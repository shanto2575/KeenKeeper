import React, { use } from 'react'
import FriendCard from './Ui/FriendCard'
const friendPromise=fetch('/friend.json').then(res=>res.json())
const Friend = () => {
const friend=use(friendPromise)
// console.log(friend)
    return (
        <div className='container mx-auto my-10'>
            <h3 className='text-2xl font-bold p-5'>Your Friends</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5 lg:my-5'>
                {
                    friend.map(friend=><FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    )
}

export default Friend
