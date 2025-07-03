import React from 'react'
import GetStartedSection from "../component/Methodology/getStartedSection"
import Animatedline from "../component/Global-file/Animetedline";
import HeaderProduct from "../component/product/HeaderProduct"
import WhyChooseCal from "../component/product/WhyChooseCal"
import VerifiedMarket from "../component/product/VerifiedMarket"

const page = () => {
  return (
    <div>
      <HeaderProduct />
      <div className="bg-lightgrey">
              <Animatedline />
            </div>
      <WhyChooseCal/>
      <VerifiedMarket/>
    </div>
  )
}

export default page