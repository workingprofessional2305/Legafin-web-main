import React from "react";


import FrontPageHeroDiv from "./FrontPageHeroDiv";
import StepByStepJourney from "./StepByStepJourney";
import Deliverables from "./Deliverables";
import WhyChooseLegafin from "./WhyChooseLegafin";
import ITandFinanceConsultancy from "./ITandFinanceConsultany";
import Slider from "./Slider";



const HeroSection = () => {
  return (
    <>
<div className="w-full flex flex-col gap-4">
  <FrontPageHeroDiv />

  {/* Slider */}
  <div className="w-full px-4 sm:px-6 md:px-8">
    <Slider />
  </div>

  {/* Step by step process */}
  <StepByStepJourney />
</div>






  {/* Private limited registration Block */}
  <Deliverables />

  {/* Why Choose Section */}
  <WhyChooseLegafin />

  {/* IT & Finance Consultancy */}
  <ITandFinanceConsultancy />


    </>
  );
};

export default HeroSection;
