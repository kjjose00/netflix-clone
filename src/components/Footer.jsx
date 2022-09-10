import React from 'react'

function Footer() {
  return (
    <>
    
    <div className='bg-black py-12'>
        <div className="lg:px-56 lg:pr-96 px-12">
            <h1 className='text-gray-500'>Questions? Call 000-800-040-1843</h1><br />
            <div className='text-gray-500 flex lg:flex-row flex-col lg:space-x-12 space-x-0 space-y-5 lg:space-y-0'>
                <div className='flex flex-row lg:space-x-12 space-x-20'>
                <div className='flex flex-col lg:space-y-3 space-y-5 text-sm'>
                    <a href="">FAQ</a>
                    <a href="">Investor Relations</a>
                    <a href="">Privacy</a>
                    <a href="">Speed Test</a>
                </div>
                <div className='flex flex-col text-sm lg:space-y-3 space-y-5'>
                    <a href="">Help Centre</a>
                    <a href="">Jobs</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Legal Notices</a>
                </div>
                </div>
                <div className='flex flex-row space-x-12'>
                <div className='flex flex-col text-sm lg:space-y-3 space-y-5'>
                    <a href="">Account</a>
                    <a href="">Ways to Watch</a>
                    <a href="">Corporate Information</a>
                    <a href="">Only on Netflix</a>
                </div>
                <div className='flex flex-col text-sm lg:space-y-3 space-y-5'>
                    <a href="">Media Centre</a>
                    <a href="">Terms of Use</a>
                    <a href="">Contact Us</a>
                </div>
                </div>
            </div><br /><br />
            <div className='globe'>
          
            <select name="" id="" className='lg:py-1 bg-transparent border px-5 text-gray-500 border-gray-500 focus:bg-gray netflix_lang outline-white lg:text-md text-sm'>
                <option value="English" className='text-white bg-slate-500'>English</option>
                <option value="Hindi" className='text-white bg-slate-500'>Hindi</option>
            </select>

        </div><br />
        <p className='text-gray-500 text-sm'>Netflix India</p>
        </div>

    </div>
    </>
  )
}

export default Footer