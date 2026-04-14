import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const FriendContext = createContext()
const FriendsProvider = ({ children }) => {

    const [called, setCalled] = useState([])
    const handleCall = (currentCall) => {
        const isExistCall = called.find(calls => calls.id === currentCall.id)

        if (isExistCall) {
            toast.error(`${currentCall.name} is alrady Timeline` )
        } else {
            setCalled([...called, currentCall])
            toast.success(`${currentCall.name} is added to Timeline` )
        }
        // console.log(currentCall, called, 'call')
    }
    const data = {
        handleCall,
        called,
        setCalled
    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
}

export default FriendsProvider
