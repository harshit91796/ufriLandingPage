import Advantages from '@/component/Adantages/Advantages'
import Content1 from '@/component/Content1/Content1'
import Customizable from '@/component/Customize/Customizable'
import DownloadApp from '@/component/DownloadApp/DownloadApp'
import Faq from '@/component/FAQ/Faq'
import Features from '@/component/Features/Features'
import Footer from '@/component/Footer/Footer'
import Testimonial from '@/component/Testimonial/Testimonial'
import React from 'react'

function page() {
  return (
    <div className=' h-screen'>
       <Content1/>
       <Features/>
       <Advantages/>
       <Customizable/>
       <Testimonial/>
       <Faq/>
       <DownloadApp/>
       <Footer/>
    </div>
  )
}

export default page
