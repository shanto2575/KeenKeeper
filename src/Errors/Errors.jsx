import React from 'react'
import { Link } from 'react-router'
import error from '../assets/App-Error.png'

const Errors = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600 p-6">
            
            <div className="bg-linear-to-r from-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl p-10 text-center max-w-xl">
                <img 
                    src={error} 
                    alt="Error"
                    className="w-72 mx-auto mb-6 animate-pulse"
                />
                <h1 className="text-5xl font-bold mb-3">404</h1>
                <p className="text-white mb-6">
                    Oops! The page you are looking for doesn't exist.
                </p>

                <Link to="/">
                    <button className="btn btn-primary px-8">
                        Go Back Home
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default Errors