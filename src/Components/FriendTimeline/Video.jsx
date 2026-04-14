import React from 'react'
import video from '../../assets/video.png'
const Video = ({friend}) => {
    return (
        <div>
            <div  className='flex items-center gap-5 border rounded-2xl p-5 my-4'>
                            <img src={video} alt="" />
                            <div>
                                <h3><span className='font-bold'>Call</span> with {friend.name}</h3>
                                <p>{friend.next_due_date}</p>
                            </div>
                        </div>
        </div>
    )
}

export default Video