// Rentdata.js
import React from 'react'
import { Link } from 'react-router-dom'

const Rentdata = () => {
  return (
    <div className='w-full h-full'>
      <div className=' w-full h-full flex flex-col justify-center items-center relative top-40'>
        <h2 className='text-2xl font-bold font-serif text-gray-900'>Let's Get Started</h2>
        <Link to={'/building-details'} className='bg-blue-950 py-3 px-4 rounded-xl text-white font-semibold font-serif mt-7 hover:bg-blue-700'>Click here</Link>
      </div>
    </div>
  )
}

export default Rentdata
