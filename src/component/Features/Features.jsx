import React from "react";
import { Star, cube, flare2, hexa, phone1, phone2, rings, star2, star3 } from "../../../public/images";
import Image from "next/image";

function Features() {
  return (
    <div className="w-screen h-screen flex  mt-60">
      <Image className=" h-[50px] w-[60px] ml-10" src={Star} alt="strip" />
      <div className="flex-1 relative mt-[-40px]">
        <Image className="absolute z-40 left-10 h-[800px]  w-[500px] rotate-12" src={phone2} />
        <Image className="absolute z-30 top-0 right-[100px]" src={rings} />
        <Image
          className="absolute z-0 top-[-80px] right-[200px] sha"
          src={flare2}
        />
      </div>

      <div className="flex flex-col gap-10 flex-1">
        <div>
          <h1 className=" text-red-500 text-xl">FEATURES</h1>
          <h1 className="text-6xl text-bold">Uifry Premium</h1>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4 items-center text-xl text-bold">
            <Image className="h-[30px] w-[30px]" src={star3} />
            <h1>Budgeting Intervals</h1>
          </div>
          <p className="w-[75%]  text-slate-500 text-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos deserunt aliquam eaque possimus libero perspiciatis ex
            voluptates illo alias numquam.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center text-xl text-bold">
            <Image className="h-[30px] w-[30px]" src={hexa} />
            <h1>Budgeting Intervals</h1>
          </div>
          <p className="w-[75%]  text-slate-500 text-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos deserunt aliquam eaque possimus libero perspiciatis ex
            voluptates illo alias numquam.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center text-xl text-bold">
            <Image className="h-[30px] w-[30px]" src={cube} />
            <h1>Budgeting Intervals</h1>
          </div>
          <p className="w-[75%] text-slate-500 text-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos deserunt aliquam eaque possimus libero perspiciatis ex
            voluptates illo alias numquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
