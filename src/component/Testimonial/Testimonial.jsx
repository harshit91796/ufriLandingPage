import Image from "next/image";
import React from "react";
import { emp1, emp2, emp3, emp4, face1, flare2, rings } from "../../../public/images";

function Testimonial() {
  return (
    <div className="flex flex-col gap-5">
      
        <div className="text-center">
          <h1>TESTIMONIAL</h1>
          <h1 className="text-5xl text-bold">What Our Users</h1>
          <h1 className="text-5xl text-bold">Say About Us?</h1>
        </div>
      

      <div className="flex gap-5 ml-20">
        <div className="flex-1 relative ">
          <Image className="absolute left-[30%] top-[50%] z-40 h-[250px] w-[250px] rounded-[150px] border-solid border-4 border-black" src={face1} />
          <Image className="absolute left-[15%] top-[20%] z-40 h-[100px] w-[100px] rounded-[150px] border-solid border-4 border-black" src={emp1} />
          <Image className="absolute left-[55%] top-[20%] z-40 h-[130px] w-[130px] rounded-[150px] border-solid border-4 border-black" src={emp2} />
          <Image className="absolute left-[62%] top-[100%] z-40 h-[90px] w-[90px] rounded-[150px] border-solid border-4 border-black" src={emp3} />
          <Image className="absolute left-[20%] top-[100%] z-40 h-[120px] w-[120px] rounded-[150px] border-solid border-4 border-black" src={emp4} />
          <Image className="absolute z-30 top-0 right-[100px]" src={rings} />
          <Image
            className="absolute z-0 top-[80px] right-[200px]"
            src={flare2}
          />
        </div>

        <div className="flex-1 mt-[10%] ">
           <div className="flex flex-col gap-4">
           <h1 className="text-3xl text-bold w-[70%]">The Best Financial Accounting App Ever!</h1>
        
        
           <p className="w-[70%] text-[20px] text-slate-500 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur ad dolore perspiciatis quas debitis possimus repudiandae dolorem odit dolores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolore deleniti dolorem natus rem cum reprehenderit, eos cupiditate voluptate neque..
           </p>
   
           <div className="flex gap-1">
               <Image className=" h-[50px] w-[50px] rounded-[50px]" src={emp2}/>
               <Image className="h-[50px] w-[50px] rounded-[50px]" src={face1}/>
               <Image className="h-[50px] w-[50px] rounded-[50px]" src={emp3}/>
               <Image className="h-[50px] w-[50px] rounded-[50px]" src={emp1}/>
           
           </div>
             
           <h1 className="text-xl text-bold">Nick Jonas</h1>
           
           
           </div>
        </div>

      </div>
      
    </div>
  );
}

export default Testimonial;
