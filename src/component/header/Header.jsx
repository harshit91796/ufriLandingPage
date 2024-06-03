import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import{ Star, logo} from '../../../public/images'; // Ensure the correct path

function Header() {
  return (
    <div className='flex h-[72px] bg-amber-200 gap-5 fixed w-screen z-[1000] ' >
      <div className=" w-[80%] ml-[10%] h-full flex justify-between items-center">
        <div className='flex gap-5'>
            <Image src={logo} alt="Logo" width={80} height={50} />
            <h1 className='text-red-500 text-bold'>Home</h1>
            <h1>AboutUs</h1>
            <h1>Pricing</h1>
            <h1>Features</h1>

        </div>
        <div>
          <button className='hover:bg-red-400 hover:shadow-2xl bg-black text-white w-[120px] h-[40px] rounded'>Download</button>
        </div>
      </div>
      <Image className='mt-10' src={Star} alt="Logo" width={60} height={20} />
    </div>
  );
}

export default Header;
