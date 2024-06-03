import Image from "next/image";
import React from "react";
import { Star } from "../../../public/images";

function Faq() {
  return (
    <div className="flex flex-col w-[80%] gap-10 mt-[20%] h-screen  ml-[10%]">
      <div className="flex gap-[100px]">
        <div className="flex flex-col gap-1 w-[500px]">
          <h1 className="text-2xl text-red-500 ">FAQ</h1>
          <h1 className="text-5xl text-bold  ">Frequently Asked Questions</h1>
        </div>
        <Image className="h-[50px] mt-20" src={Star} />
      </div>

      <div className="grid grid-cols-2 ">
        <div className="h-[200px] bg-red-400 text-white rounded-[10px]">
          <div className="m-5 ">
            <h1 className="text-3xl text-bold m-5">
              {" "}
              The Best Financial Accounting app ever!
            </h1>
            <h1 className="m-5 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minima sint ea dolore a? Esse possimus placeat ratione hic sequi!
            </h1>
          </div>
        </div>

        <div className="h-[200px]   rounded-[10px]">
          <div className="m-5 ">
            <h1 className="text-3xl text-bold m-5">
              {" "}
              The Best Financial Accounting app ever!
            </h1>
            <h1 className="m-5 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minima sint ea dolore a? Esse possimus placeat ratione hic sequi!
            </h1>
          </div>
        </div>

        <div className="h-[200px] rounded-[10px]">
          <div className="m-5 ">
            <h1 className="text-3xl text-bold m-5">
              {" "}
              The Best Financial Accounting app ever!
            </h1>
            <h1 className="m-5 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minima sint ea dolore a? Esse possimus placeat ratione hic sequi!
            </h1>
          </div>
        </div>

        <div className="h-[200px] bg-red-400 text-white rounded-[10px]">
          <div className="m-5 ">
            <h1 className="text-3xl text-bold m-5">
              {" "}
              The Best Financial Accounting app ever!
            </h1>
            <h1 className="m-5 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minima sint ea dolore a? Esse possimus placeat ratione hic sequi!
            </h1>
          </div>
        </div>

        <div className="h-[200px] bg-red-400 text-white rounded-[10px]">
          <div className="m-5 ">
            <h1 className="text-3xl text-bold m-5">
              {" "}
              The Best Financial Accounting app ever!
            </h1>
            <h1 className="m-5 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minima sint ea dolore a? Esse possimus placeat ratione hic sequi!
            </h1>
          </div>
        </div>

        <div className="h-[200px] rounded-[10px]">
          <div className="m-5 ">
            <h1 className="text-3xl text-bold m-5">
              {" "}
              The Best Financial Accounting app ever!
            </h1>
            <h1 className="m-5 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minima sint ea dolore a? Esse possimus placeat ratione hic sequi!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
