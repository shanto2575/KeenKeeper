import React, { useEffect, useState } from 'react'

const useFriend = () => {
    const [friend, setfriend] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await fetch('/friend.json')
            const data=await res.json()
            // console.log(data)
            setfriend(data)
            setloading(false)
        }
        fetchdata()
    },[])
    return {friend,loading}
}

export default useFriend