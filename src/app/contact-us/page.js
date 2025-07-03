import React from 'react'
import FaqBanner from '../component/contact-us/FaqBanner'
import FaqSecond from '../component/contact-us/FaqSecond'
import ContactForm from '../component/home-page/ContactForm'
import Animatedline from '../component/Global-file/Animetedline'


const page = () => {
  return (
    <div>
       <FaqBanner/>
       <FaqSecond/>
       <Animatedline />
       <ContactForm/>
    </div>
  )
}

export default page