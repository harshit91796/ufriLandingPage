import Image from "next/image";
import React from "react";
import { logo } from "../../../public/images";
import { Call, Mail } from "@mui/icons-material";
import styles from './footer.module.css'

function Footer() {
  return (
    <div className="h-[60%] w-[80%]  text-[15px] text-bold ml-[10%] ">
      <div className="flex  gap-20 ">
        <div className="flex flex-col gap-3">
          <Image src={logo} />
          <div className="flex gap-2">
          <Mail style={{color : 'red'}}/>
          <h1>Help@Frybix.com</h1>
          </div>
          <div className="flex gap-2">
          <Call style={{color : 'red'}}/>
          <h1>+98517894465</h1>
          </div>
         
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-bold">Links</h1>
          <h1>Home</h1>
          <h1>AboutUs</h1>
          <h1>Booking</h1>
          <h1>Blog</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-bold">Legal</h1>
          <h1>TermsOfUse</h1>
          <h1>Privacy Policy</h1>
          <h1>Cookie Policy</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-bold">Product</h1>
          <h1>Take Tour</h1>
          <h1>Live Chat</h1>
          <h1>Reviews</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-bold">Newsletter</h1>
          <h1>Stay Up to Date</h1>
          <div>
            <input
              className=" bg-transparent outline-none"
              placeholder="Email"
              type="text"
            />
            <button className="bg-black  text-white w-[180px] h-[60px] rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className={styles.fadingline}  ></div>
       <h1 className="text-center mt-10">Copyright2022Urify.comAllRightReserved</h1>
      
    </div>
  );
}

export default Footer;
