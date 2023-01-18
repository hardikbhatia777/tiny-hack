import React from 'react'
import Navbar from '../components/Navbar'
import WorkoutCard from '../components/WorkoutCard'

function Workout() {
  return (
    <div>
        <Navbar />
        <h1 className='relative top-5 left-6'>My Workout Regime</h1>
        <div className='flex flex-row'>
            <WorkoutCard title="Push ups" cls="" author="" img="https://cdn-icons-png.flaticon.com/512/2548/2548530.png" />
            <WorkoutCard title="Pike Crunches" cls="" author="" img="https://cdn-icons-png.flaticon.com/512/6315/6315892.png" />
            <WorkoutCard title="Weight Lifting" cls="" author="" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h61sO7iqcMpcF75qv1sx-i6rPg0z_26FIQ&usqp=CAU" />
        </div>
    </div>
  )
}

export default Workout