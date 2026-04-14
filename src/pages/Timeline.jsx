import React, { useContext } from 'react'
import { FriendContext } from '../Context/FriendsProvider'

const Timeline = () => {
    const {called}=useContext(FriendContext)
        console.log(called)
    return (
        <div>
            
        </div>
    )
}

export default Timeline