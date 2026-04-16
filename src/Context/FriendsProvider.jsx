import React, {  useState } from 'react'
import { toast } from 'react-toastify'
import { FriendContext } from './CreateContext'

// export const FriendContext = createContext()
const FriendsProvider = ({ children }) => {

    const [called, setCalled] = useState([])
    const [text, setText] = useState([])
    const [video, setVideo] = useState([])
    const handleCall = (currentCall) => {
        const isExistCall = called.find(calls => calls.id === currentCall.id)

        if (isExistCall) {
            // toast.error(`${currentCall.name} is alrady Timeline`)
            toast.error(`${currentCall.name} is alrady Timeline`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            setCalled([...called, currentCall])
            // toast.success(`${currentCall.name} is added to Timeline`)
            toast.success(`${currentCall.name} is added to Timeline`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        // console.log(currentCall, called, 'call')
    }
    const handleText = (currentCall) => {
        const isExistText = text.find(text => text.id === currentCall.id)

        if (isExistText) {
            // toast.error(`${currentCall.name} is alrady Timeline`)
            toast.error(`${currentCall.name} is alrady Timeline`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            setText([...text, currentCall])
            // toast.success(`${currentCall.name} is added to Timeline`)
            toast.success(`${currentCall.name} is added to Timeline`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const handleVideo = (currentCall) => {
        const isExistVideo = video.find(video => video.id === currentCall.id)

        if (isExistVideo) {
            // toast.error(`${currentCall.name} is alrady Timeline`)
            toast.error(`${currentCall.name} is alrady Timeline`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            setVideo([...video, currentCall])
            // toast.success(`${currentCall.name} is added to Timeline`)
            toast.success(`${currentCall.name} is added to Timeline`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const data = {
        handleCall,
        called,
        setCalled,
        handleText,
        text,
        setText,
        video,
        setVideo,
        handleVideo
    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
}

export default FriendsProvider
