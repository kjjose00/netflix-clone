import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
  <>

    <div className='nav_class'>
    </div>

    <div className='home_window_black'>
        <Navbar/>
        
        <div className='flex justify-center flex-col items-center pt-2'>
        

    
        <h1 className='text-center myfont overflow-hidden'>Unlimited movies, TV shows and more.</h1><br />
        <p className='ad_word'>Watch anywhere. Cancel anytime.</p><br />
        <p className='ad_service_w'>Ready to watch? Enter your email to create or restart your membership.</p><br />
        <div className='lg:w-1/2 w-full flex lg:flex-row flex-col px-3 space-y-5 lg:space-y-0'>

        <input type="email" name="" id="" className='w-full lg:py-4 py-2 px-3 outline-none border-none m-auto text-lg' required placeholder='Email address'/>
        <button className='bg-red-600 lg:px-5 px-3 lg:w-64 w-52 text-white text-xl lg:text-2xl m-auto py-2 font-semibold lg:font-semibold'>Get Started &#62;</button>
        </div>
        </div>
    </div>

    
  </>
  )
}

export default Home