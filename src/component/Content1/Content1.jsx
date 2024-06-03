import { PlayCircleOutline } from '@mui/icons-material'
import React from 'react'
import { Star, flare1, flare2, phone1, rings, strip } from '../../../public/images'
import Image from 'next/image';
import styles from './content.module.css'

function Content1() {
  return (
    <div className=' h-screen w-full'>
      <div className='flex'>
       <Image className=' h-[50px] w-[60px] ' src={Star} alt="strip"  />
          <div className='relative  flex flex-1 flex-col gap-5 ml-[10%] mt-[10%]  h-screen'>
          <Image className='absolute left-[70px] top-[-400px] z-[0] h-[800px] w-[600px] ' src={flare2} alt="strip"  />
             <h1 className='text-6xl text-bold z-20'>Make The Best Financial Decisions.</h1>
            <p className='text-2xl z-20'>We help you make informed financial decisions.</p>
            <div className='flex gap-5 items-center '>
              <div className='hover:shadow-4xl'>
              <button className=' hover:bg-red-400 bg-black text-white w-[180px] h-[60px] rounded'>Get Started</button>
              </div>
              <div className='flex gap-2 z-10'>
                <PlayCircleOutline/>
                <p>Watch Video</p>
              </div>
            </div>

            <div className=' '>
               <Image className='h-[400px] w-[600px]' src={strip} alt="strip"  />
            </div>
            
          </div>

          <div className='flex-1'>
               <div className='relative bg-gray-50'>
               <Image className='absolute right-[150px] top-[-50px] z-30 h-[800px] w-[600px]  ' src={phone1} alt="strip"  />
               <Image className='absolute  z-20 left-[50px] top-10  h-[800px] w-[600px]  ' src={phone1} alt="strip"  />
               <Image className='absolute left-[180px] top-[100px] z-10 h-[800px] w-[600px] ' src={phone1} alt="strip"  />
               <Image className='absolute left-[70px] top-[130px] z-0 h-[800px] w-[600px] ' src={flare2} alt="strip"  />
               <Image src={rings} />
               </div>
          </div>
      </div>
    </div>
  )
}

export default Content1
