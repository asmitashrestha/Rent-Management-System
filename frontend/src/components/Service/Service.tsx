import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <div className=' bg-gray-950 hover:bg-stone-800 font-serif mb-5 mr-5 rounded-2xl shadow-stone-900 hover:shadow-stone-950 shadow-2xl'>
      <div className="h-[200px] w-[400px] p-7">
        <h2 className='font-bold text-xl text-blue-400 mb-3 justify-center text-center'>{title}</h2>
        <p className='text-cyan-100 text-center justify-center'>{description}</p>
      </div>
    </div>
  )
}

export default Service;
