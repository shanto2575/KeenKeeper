import { Link, useLoaderData, useParams } from 'react-router'
import error from '../../assets/error-404.png'
import { FaRegBell } from 'react-icons/fa'
import { IoArchiveOutline } from 'react-icons/io5'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
import { FriendContext } from '../../Context/FriendsProvider'
import { useContext } from 'react'

const FriendDetails = () => {
    const { id } = useParams()
    // console.log(params)
    const data = useLoaderData()
    // console.log(data)
    const isExist = data.find(data => data.id === Number(id))
    // console.log(isExist)
    if (!isExist) {
        return <div className='flex flex-col justify-center items-center h-[600px] space-y-4 shadow-[0_0_25px_rgba(0,0,0,0.25)] rounded-2xl m-10'>
            <img src={error} alt={isExist} />
            <h2 className="text-3xl font-semibold ">Page Not Found</h2>
            <p className="text-center text-gray-500 max-w-md">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link to={'/'}><button className='btn btn-error'>Go Back</button></Link>
        </div>
    }
    const { name, picture, days_since_contact, email, bio, goal, next_due_date } = isExist;

    const {handleCall,handleText,handleVideo}=useContext(FriendContext)
    // console.log(handleCall,called)
    
    return (
        <div>
            <div className='container mx-auto bg-base-100 grid grid-cols-9 gap-4 my-10 '>
                <div className='col-span-3 space-y-4 text-center'>
                    <div className='shadow-[0_0_25px_rgba(0,0,0,0.15)] p-5  rounded-2xl space-y-2'>
                        <div className='flex flex-col items-center justify-center space-y-3'>
                            <img src={picture} alt={name} className='rounded-full' />
                            <h2 className='text-2xl font-bold'>{name}</h2>
                            <p className='text-center text-gray-400'>{bio}</p>
                            <p><span className='font-semibold'>Email : </span> {email}</p>
                        </div>
                    </div>
                    <div className='space-y-4 flex flex-col'>
                        <button className='btn rounded-xl'><FaRegBell></FaRegBell>Snooze 2 weeks</button>
                        <button className='btn rounded-xl'><IoArchiveOutline></IoArchiveOutline>Archive</button>
                        <button className='btn rounded-xl text-red-700'><RiDeleteBin2Fill></RiDeleteBin2Fill>Delete</button>

                    </div>
                </div>
                <div className=' col-span-6 rounded-2xl space-y-5'>
                    <div className='grid grid-cols-9 gap-5  '>
                        <p className='shadow-[0_0_25px_rgba(0,0,0,0.15)] flex flex-col items-center col-span-3 rounded-2xl p-5 text-3xl font-semibold'>{days_since_contact}<span className='text-xl text-gray-400'>Days Since Contact</span></p>
                        <p className='shadow-[0_0_25px_rgba(0,0,0,0.15)] flex flex-col items-center col-span-3 rounded-2xl p-5 text-3xl font-semibold'>{goal}<span className='text-xl text-gray-400'>Goal (Days)</span></p>
                        <p className='shadow-[0_0_25px_rgba(0,0,0,0.15)] flex flex-col items-center col-span-3 rounded-2xl p-5 text-3xl font-semibold'>{next_due_date}<span className='text-xl text-gray-400'>Next Due</span></p>
                    </div>
                    <div className=' shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl'>
                        <div className='flex justify-between px-5 pt-5'>
                            <p className='text-xl font-semibold text-green-950'>Relationship Goal</p>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='px-5 pb-5 text-gray-400'>Connect every <span className='font-bold text-black'>{days_since_contact} days</span></p>
                    </div>
                    <div className='shadow-[0_0_5px_rgba(0,0,0,0.15)] rounded-2xl p-5 space-y-4'>
                        <p className="font-semibold text-lg">Quick Check-In</p>
                        <div className='grid grid-cols-3 gap-6 '>
                            <button onClick={() => handleCall(isExist)} className='btn py-15 flex flex-col items-center justify-center gap-3 '>
                                <img src={call} alt="call" />
                                <span className='text-xl text-gray-700'>Call</span>
                            </button>
                            <button onClick={()=>handleText(isExist)} className='btn py-15 flex flex-col items-center justify-center gap-3 '>
                                <img src={text} alt="text" />
                                <span className='text-xl text-gray-700'>Text</span>
                            </button>
                            <button onClick={()=>handleVideo(isExist)} className='btn py-15 flex flex-col items-center justify-center gap-3 '>
                                <img src={video} alt="video" />
                                <span className='text-xl text-gray-600'>Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendDetails