import React from 'react'
import { Star, flare2, phone1, rings, star2 } from "../../../public/images";
import Image from "next/image";

function Customizable() {
  return (
    <div className="w-screen h-screen flex  mt-60">
     

      <div className="flex-1 relative ml-40">
        <Image className="absolute z-40 h-[800px] w-[600px]" src={phone1} />
        <Image className="absolute z-30 top-0 right-[100px]" src={rings} />
        <Image
          className="absolute z-0 top-[-80px] right-[200px]"
          src={flare2}
        />
        <Image className="absolute h-[50px] w-[30px] left-[500px] " src={Star} alt="strip" />
      </div>

        
    
        <div className=" mt-40 flex flex-col gap-5 flex-1 item-center">

        <div className="flex flex-col gap-3 mt-[10%]">
          <div className="flex gap-4 items-center text-xl text-bold">
            <Image className="h-[40px] w-[40px] bg-red-400 rounded-[50px]" src={star2} />
            <h1 className='text-2xl text-bold'>Fully Customizable</h1>
          </div>
          <p className="w-[70%] text-slate-500 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos deserunt aliquam eaque possimus libero perspiciatis ex
            voluptates illo alias numquam lorem20.
          </p>
        </div>
      </div>

        </div>
  )
}

export default Customizable
