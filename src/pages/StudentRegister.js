import React from 'react'
import Navbar from '../components/Navbar'

const StudentRegister = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center'>
        <div className='m-2'>
        <label className='text-xl font-semibold mr-2'>Student Name:</label>
        <input type="text" className='border-2' />
        </div>
        <div className='m-2'>
        <label className='text-xl font-semibold mr-2'>Student EN number:</label>
        <input type="text" className='border-2' />
        </div>
        <div className='m-2'>
        <label className='text-xl font-semibold mr-2'>Wallet Address:</label>
        <input type="text" className='border-2' />
        </div>
        <div className='m-2'>
            <button className='bg-slate-400 text-lg p-2 rounded-lg hover:bg-slate-200'>Submit</button>
        </div>
    </div>
    </>
    
  )
}

export default StudentRegister
