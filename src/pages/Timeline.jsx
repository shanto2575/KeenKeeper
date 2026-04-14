import React, { useContext } from 'react'
import { FriendContext } from '../Context/FriendsProvider'
import Text from '../Components/FriendTimeline/Text'
import Video from '../Components/FriendTimeline/Video'
import Calls from '../Components/FriendTimeline/Calls'
const Timeline = () => {
    const { called ,text,video} = useContext(FriendContext)
    // console.log(called)
    if(called.length===0 && text.length===0 && video.length===0){
        return(
            <div className='border h-[500px] flex items-center justify-center p-5 m-10 rounded-2xl'>
                <p className='text-4xl font-bold'>No Data Found In Timeline</p>
            </div>
        )
    }
    return (
        <div>
            <div className='container mx-auto my-10 space-y-4'>
                <h2 className='text-3xl font-bold'>Timeline</h2>
                <div>
                    {text.map(friend => <Text key={friend.id} friend={friend}></Text>)}
                    {called.map(friend => <Calls key={friend.id} friend={friend}></Calls>)}
                    {video.map(friend => <Video key={friend.id} friend={friend} ></Video>)}
                </div>
            </div>
        </div>
    )
}

export default Timeline