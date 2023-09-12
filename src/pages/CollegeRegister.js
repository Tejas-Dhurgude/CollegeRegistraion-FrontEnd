import React from 'react'
import Navbar from '../components/Navbar'

const CollegeRegister = () => {
  return (
    <>
    <div className='bg-img-institute h-screen bg-cover'>
    <Navbar/>

    <div className='flex flex-col justify-center bg-slate-200 max-w-fit rounded-lg m-32 p-8'>
        <div className='m-4'>
        <label className='text-xl font-semibold mr-2'>Institute Name:</label>
        <input type="text" className='border-2' />
        </div>
        <div className='m-4'>
        <label className='text-xl font-semibold mr-2'>Institute Code:</label>
        <input type="text" className='border-2' />
        </div>
        <div className='m-4'>
        <label className='text-xl font-semibold mr-2'>Wallet Address:</label>
        <input type="text" className='border-2' />
        </div>
        <div className='m-4'>
            <button className='bg-yellow-400 text-lg p-2 rounded-lg border-2 border-slate-400 hover:bg-yellow-200'>Submit</button>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default CollegeRegister
