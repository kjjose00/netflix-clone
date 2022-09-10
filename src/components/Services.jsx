import React, { useEffect } from 'react'
import tv from '../tv.png';
import tvvideo from '../video-tv-in-0819.mp4';
import ReactPlayer from 'react-player'
import mobileplayer from '../mobile-0819.jpg';
import boxshot from '../boxshot.png';
import icongif from '../download-icon.gif';
import devices from '../device-pile-in.png';
import devicesvideo from '../video-devices-in.mp4';
import children from '../children.png';
import {faq} from '../apis/faq';
import { useState } from 'react';

function Services() {
  const [mail,setMail]=useState('')

  


  function toggle(e){
    console.log(e.currentTarget.id);
    const itno=e.currentTarget.id.slice(-1)
    const faqs=document.getElementById(`item${itno}`)

  
    console.log(faqs);
    if(faqs.classList.contains('hidden')){
      for(var i=1;i<7;i++){
        const fs=document.getElementById(`item${i.toString()}`).classList.add('hidden')
        document.getElementById(`symbol${i.toString()}`).innerHTML='+'
        console.log(i)
      }
      faqs.classList.remove('hidden')
      document.getElementById(`symbol${itno}`).innerHTML='x'
      
    

    }else{
      for(var i=1;i<7;i++){
        const fs=document.getElementById(`item${i.toString()}`).classList.add('hidden')
        document.getElementById(`symbol${i.toString()}`).innerHTML='+'
        console.log(i)
      }
      faqs.classList.add('hidden')
      document.getElementById(`symbol${itno}`).innerHTML='+'
      
    }
  }
  // useEffect(function(){
  //   for(var i=1;i<7;i++){
  //     const fs=document.getElementById(`item${i.toString()}`).classList.add('hidden')
  
  //   }
  // })



  return (
    <>
    {/* first section */}
        <div className='flex bg-black py-20 my-2 w-screen justify-evenly lg:px-20 px-2 lg:flex-row text-white relative flex-col'>
            <div className='lg:text-white flex justify-center flex-col lg:text-left lg:px-20 px-1 text-center text-white lg:w-1/2'>
                <h1 className='lg:text-5xl text-3xl font-bold overflow-hidden'>Enjoy on your TV.</h1><br />
                <p className='lg:text-2xl text-xl font-normal'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='lg:w-1/3 relative w-full' style={{zIndex:2}}>
                <img src={tv} alt="" className="service_image" />
            <ReactPlayer
             url={tvvideo} 
             width="290px"
             height="350px"

             loop={true}
             playing={true}
             autoPlay={true}
             muted={true}
            
             
             className='tv_video'/>
            </div>
            
           

            
        </div>

        {/* second section */}
        <div className='flex bg-black lg:py-3 py-12  my-2 w-screen justify-evenly lg:px-20 px-2 lg:flex-row flex-col-reverse text-white relative'>
          <div className='lg:w-1/2 w-full flex items-center justify-center'>
              <img src={mobileplayer} alt="" className='' />
              <div className='lg:w-96 w-72 py-3 border-2 lg:bottom-12 bottom-12 p-3 bg-black border-gray-600 absolute rounded-xl flex justify-between items-center'>
                <div className='flex space-x-4'>
                        
                <div>
                  <img src={boxshot} alt="" className='lg:w-12 w-10'/>
                </div>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-white font-bold'>Stranger Things</h1>
                  <p className='text-blue-500 font-normal'>Downloading...</p>
                </div>

                </div>

                <div>
                    <img src={icongif} alt="" className='w-12'/>
                </div>
              </div>
          </div>
          <div className='lg:w-1/2 w-full flex items-center flex-col justify-center lg:px-12 px-1 pt-20 lg:pt-0'>
              <h1 className='lg:text-5xl text-3xl font-bold text-center lg:text-left overflow-hidden'>Download your shows to watch offline.</h1><br />
              <p className='lg:text-2xl text-xl font-normal text-center lg:text-left'>Save your favourites easily and always have something to watch.
</p>
          </div>

        </div>

        {/* third services */}

        <div className='flex bg-black py-12 my-2 w-screen justify-evenly lg:px-20 px-2 lg:flex-row flex-col text-white relative items-center'>
          <div className='px-12'>
              <h1 className='lg:text-5xl text-3xl font-bold text-center lg:text-left overflow-hidden'>Watch everywhere.</h1><br />
              <p className='lg:text-2xl text-xl font-normal text-center lg:text-left'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className='flex justify-center lg:w-full w-screen relative px-0' style={{zIndex:2}}>
            <img src={devices} alt="" className='lg:h-96 h-80 myvc'/>
            <ReactPlayer
             url={devicesvideo} 
             
            

             loop={true}
             playing={true}
             autoPlay={true}
             muted={true}
             
            
             
             className='absolute bottom-0 myvideo_cls'/>
          
          </div>
        </div>

        {/* fourth */}

        <div className='flex bg-black py-12 my-2 w-screen lg:px-12 justify-evenly px-2 lg:flex-row flex-col-reverse text-white relative items-center'>
          <div className='w-full'>
            <img src={children} alt="" />
          </div>
          <div className='text-white w-screen px-12'>
            <h1 className='lg:text-5xl text-3xl font-bold text-center lg:text-left overflow-hidden'>Create profiles for children.</h1><br />
            <p className='lg:text-2xl text-xl font-normal text-center lg:text-left'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>

        {/* fifth */}

        <div className='bg-black py-12 my-2 w-screen lg:px-12 text-white flex flex-col'>
          <h1 className='lg:text-5xl text-4xl text-white font-bold text-center bg-black overflow-hidden'>Frequently Asked Questions</h1><br /><br />
         {faq.map((item)=>{
          return(
            <>
            <div className='text-white lg:w-2/3 w-full m-auto cursor-pointer faq mt-2' style={{backgroundColor:"rgb(48,48,48)"}} key={item.id} id={`it${item.id}`} onClick={(e)=>toggle(e)}>
            <div className=''>
              <div className='flex justify-between p-5'>

              <p className='text-2xl overflow-hidden font-semibold'>{item.question}</p>
              <p className='text-3xl overflow-hidden' id={`symbol${item.id}`}>+</p>
              
              </div>
            </div>
          </div>
              <div className='p-5 text-2xl faqa lg:w-2/3 w-full m-auto hidden text-justify' style={{backgroundColor:"rgb(48,48,48)",marginTop:"1px"}} id={`item${item.id}`}>
               {item.answer}
              </div>
              </>

          )
         })} 
          <br /><br /><br />
         <p className='text-white text-center text-2xl px-12 lg:px-0'>Ready to watch? Enter your email to create or restart your membership.</p><br />

         <div className='lg:w-1/2 w-full flex lg:flex-row flex-col px-3 space-y-5 lg:space-y-0 m-auto'>

        <input type="email" name="" id="" className='w-full lg:py-4 py-2 px-3 outline-none border-none m-auto text-lg text-gray-700' required placeholder='Email address' value={mail} onChange={(e)=>setMail(e.target.value)}/>
        <button className='bg-red-600 lg:px-5 px-3 lg:w-64 w-52 text-white text-xl lg:text-2xl m-auto py-2 font-semibold lg:font-semibold'>Get Started &#62;</button>
        </div>
        </div>
        

          
    </>
  )
}

export default Services

