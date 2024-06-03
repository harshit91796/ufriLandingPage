import React from "react";
import { Star, bell, flare2, flare3, phone1, phone2, phone3, rings } from "../../../public/images";
import Image from "next/image";

function Advantages() {
  return (
    <div className="w-screen h-screen flex  mt-60">
      <div className="ml-40 mt-40 flex flex-col gap-5 flex-1 item-center">
        <div >
          <h1 className=" text-red-500 text-xl">ADVANTAGES</h1>
          <h1 className="text-6xl text-bold">Why Choose Uifry?</h1>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center text-xl text-bold">
            <Image className="h-[50px] w-[50px]" src={bell} />
            <h1>Clever Notification</h1>
          </div>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos deserunt aliquam eaque possimus libero perspiciatis ex
            voluptates illo alias numquam.
          </p>
        </div>
      </div>

      <div className="flex-1 relative ">
        <Image className="absolute z-40 h-[800px] w-[500px] rotate-12" src={phone2} />
        <Image className="absolute z-30 top-0 right-[100px]" src={rings} />
        <Image
          className="absolute z-0 top-[150px] right-[200px]"
          src={flare3}
        />
      </div>

      <Image className="h-[50px] w-[60px] mr-10 rotate-45" src={Star} alt="strip" />
    </div>
  );
}

export default Advantages;
