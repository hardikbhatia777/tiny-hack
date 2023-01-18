import React from 'react'
import Signin from '../components/Signin'

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen w-screen py-20 px-20">
        <div className="flex justify-center m-auto center opacity-100 text-center text-white shadow-lg p-10 rounded-xl object-center bg-transparent flex-1 w-50 py-20"> 
        <Signin/>
        </div>
        
    </div>
    
  )
}

export default Home