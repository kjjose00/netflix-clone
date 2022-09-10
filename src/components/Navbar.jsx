
import React from 'react'
import netflix from '../Netflix_2015_logo.png';

function Navbar() {
  return (
    <nav className='h-auto lg:py-10 py-5 flex w-full lg:px-10 px-3 items-center'>
        <div className='lg:w-1/2 w-1/3'>

        <img src={netflix} alt="" className="lg:w-40 w-24"/>
        </div>
        <div className='lg:w-1/2  w-2/3 flex float-right justify-end items-center lg:space-x-10 space-x-5 ntfx'>
          
            <select name="" id="" className='lg:py-1 bg-transparent border-2 px-4 text-white focus:bg-gray text-sm netflix_lang'>
                <option value="English" className='text-white bg-slate-500'>English</option>
                <option value="Hindi" className='text-white bg-slate-500'>Hindi</option>
            </select>
            <button className='bg-red-600 text-white lg:py-2 rounded-sm px-4 text-sm py-1'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar