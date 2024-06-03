import Image from 'next/image'
import React from 'react'
import {  Star, flare3, frame } from '../../../public/images'

function DownloadApp() {
  return (
    <div className='relative mt-[20%] h-screen'>
        <Image className='absolute z-10 ml-[10%] w-[80%]' src={frame}/>
        <Image className='absolute z-0 top-[-200px] ' src={flare3}/>
        <Image className='absolute top-[-60px] left-[94%]' src={Star}/>
        <Image className='absolute top-[30%] left-10 rotate-90' src={Star}/>
    </div>
  )
}

export default DownloadApp
