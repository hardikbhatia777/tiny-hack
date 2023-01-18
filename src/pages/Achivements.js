import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import {useState} from 'react'
const Achivements = () => {
  return (
    <div className= "bg-[#FFFFFF]">
        <Navbar/>
        <div className="mx-10 flex flex-wrap my-0 p-3 bg-transparent">
            <Card title="My first Tournament" desc="Professional Cricketer for Mumbai Indians" author="Sachin" img="https://as2.ftcdn.net/v2/jpg/02/24/86/95/1000_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"/>
            <Card title="The Journey" desc="Professional Cricketer for Team India" author="KL Rahul" img="https://as2.ftcdn.net/v2/jpg/01/15/85/23/1000_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg"/>
            <Card title="Godly Talent" desc="Board member for BCCI" author="Virat Kohli" img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <Card title="The Beautiful game" desc="Amateur footballer, RN Strikers" author="abc" img="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-600w-623804987.jpg"/>
        </div>
        <div className="bg-gray-800 h-8 w-screen">

        </div>
    </div>
  )
}

export default Achivements