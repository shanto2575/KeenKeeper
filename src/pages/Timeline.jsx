import React, { useContext, useState } from 'react'
import Text from '../Components/FriendTimeline/Text'
import Video from '../Components/FriendTimeline/Video'
import Calls from '../Components/FriendTimeline/Calls'
import Data from '../assets/no-data.avif'
import { FriendContext } from '../Context/CreateContext'

const Timeline = () => {
    const { called, text, video } = useContext(FriendContext)
    const [filter, setFilter] = useState("all")
    let filteredData = []

    if (filter === "all") {
        filteredData = [
            ...text.map(item => ({ ...item, type: "text" })),
            ...called.map(item => ({ ...item, type: "call" })),
            ...video.map(item => ({ ...item, type: "video" }))
        ]
    }
    if (filter === "text") filteredData = text.map(item => ({ ...item, type: "text" }))
    if (filter === "call") filteredData = called.map(item => ({ ...item, type: "call" }))
    if (filter === "video") filteredData = video.map(item => ({ ...item, type: "video" }))

    return (
        <div className="container mx-auto my-10 space-y-4">
            <h2 className="text-3xl font-bold">Timeline</h2>
            <div>
                {
                    filteredData.length === 0 ? (<div className='flex flex-col items-center justify-center h-96 w-auto shadow-2xl space-y-4'>
                        <img src={Data} alt="No DATA" className='h-64 w-auto rounded-full'/>
                        <p className='font-bold text-2xl'>No Data in Timeline</p>
                    </div>) : (
                        <div className="flex justify-start">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    Filter Timeline : {filter}
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow">
                                    <li onClick={() => setFilter("all")}><a>All</a></li>
                                    <li onClick={() => setFilter("text")}><a>Text</a></li>
                                    <li onClick={() => setFilter("call")}><a>Calls</a></li>
                                    <li onClick={() => setFilter("video")}><a>Video</a></li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>

            {filteredData.map((friend,index) => {
                if (friend.type === "text") return <Text key={index} friend={friend} />
                if (friend.type === "call") return <Calls key={index} friend={friend} />
                if (friend.type === "video") return <Video key={index} friend={friend} />
            })}
        </div>
    )
}

export default Timeline