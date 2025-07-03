import React from 'react'
import ValuationMethodology from '../component/Methodology/valuation'
import GetStartedSection from "../component/Methodology/getStartedSection"
import Animatedline from "../component/Global-file/Animetedline";

const page = () => {
  return (
    <div>
      <ValuationMethodology/>
      <div className="bg-lightgrey">
              <Animatedline />
            </div>
      <GetStartedSection/>
    </div>
  )
}

export default page