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
    const { name, picture, days_since_contact, email, status, tags, bio, goal, next_due_date } = isExist;

    const { handleCall, handleText, handleVideo } = useContext(FriendContext)
    // console.log(handleCall,called)
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
        <div className="px-4">
            <div className="container mx-auto bg-base-100 grid grid-cols-1 lg:grid-cols-9 gap-6 my-10">
                <div className="lg:col-span-3 space-y-4 text-center">
                    <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)] p-5 rounded-2xl space-y-3">
                        <div className="flex flex-col items-center space-y-3">
                            <img src={picture} alt={name} className="rounded-full w-32 h-32 object-cover" />
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <span className={style(status)}>
                                {status}
                            </span>
                            <div className='flex gap-2 flex-wrap justify-center'>
                                {
                                    tags.map((tag, index) => (
                                        <span key={index} className='bg-green-200 px-2 py-1 rounded-full text-sm'>
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>
                            
                            <p className="text-gray-400">{bio}</p>
                            <p><span className="font-semibold">Email :</span> {email}</p>
                        </div>
                    </div>
                    <div className="space-y-3 flex flex-col">
                        <button className="btn rounded-xl"><FaRegBell /> Snooze 2 weeks</button>
                        <button className="btn rounded-xl"><IoArchiveOutline /> Archive</button>
                        <button className="btn rounded-xl text-red-700"><RiDeleteBin2Fill /> Delete</button>
                    </div>
                </div>
                <div className="lg:col-span-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)] flex flex-col items-center rounded-2xl p-5 text-3xl font-semibold">
                            {days_since_contact}
                            <span className="text-lg text-gray-400 text-center">Days Since Contact</span>
                        </div>
                        <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)] flex flex-col items-center rounded-2xl p-5 text-3xl font-semibold">
                            {goal}
                            <span className="text-lg text-gray-400">Goal (Days)</span>
                        </div>
                        <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)] flex flex-col items-center rounded-2xl p-5 text-3xl font-semibold">
                            {next_due_date}
                            <span className="text-lg text-gray-400">Next Due</span>
                        </div>
                    </div>
                    <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 px-5 pt-5">
                            <p className="text-xl font-semibold text-green-950">Relationship Goal</p>
                            <button className="btn w-full sm:w-auto">Edit</button>
                        </div>
                        <p className="px-5 pb-5 text-gray-400">
                            Connect every <span className="font-bold text-black">{days_since_contact} days</span>
                        </p>
                    </div>
                    <div className="shadow-[0_0_5px_rgba(0,0,0,0.15)] rounded-2xl p-5 space-y-4">
                        <p className="font-semibold text-lg">Quick Check-In</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button onClick={() => handleCall(isExist)} className="btn py-15 hover:btn-success flex flex-col gap-3">
                                <img src={call} alt="call" className="w-10" />
                                <span className="text-lg">Call</span>
                            </button>
                            <button onClick={() => handleText(isExist)} className="btn py-15 hover:btn-primary flex flex-col gap-3">
                                <img src={text} alt="text" className="w-10" />
                                <span className="text-lg">Text</span>
                            </button>
                            <button onClick={() => handleVideo(isExist)} className="btn hover:btn-error py-15 flex flex-col gap-3">
                                <img src={video} alt="video" className="w-10" />
                                <span className="text-lg">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendDetails