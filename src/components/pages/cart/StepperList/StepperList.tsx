import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import { StepsListType } from '@/types/payment/elements';
import ButtonCircleArrow from '@/components/common/Buttons/ButtonCircleArrow';
// import ShippingForm from './components/ShippingForm/ShippingForm';
import styles from "./styles.module.scss"
import ShippingInfo from './components/AdditionalInfo/ShippingInfo';
import StripePayment from './components/StripePayment/StripePayment';


export default function StepperList(){
  
  const steps: StepsListType[] = [
    {label: "Shipping Information", element: <ShippingInfo/>}, 
    {label: "Checkout", element: <StripePayment/>}
  ]
  
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  // const [isAnimating, setIsAnimating] = useState<boolean>(true)

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  function handleNext(){
    let newSkipped = skipped;
    if(isStepSkipped(activeStep)){
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    // console.log(false)
    // setIsAnimating(false)

    // setTimeout(() => {
    //   console.log(true)
    //   setIsAnimating(true)

    //     console.log(3333)
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    // }, 300)
  };

  function handlePrev(){
    // setIsAnimating(false)

    setActiveStep((prev) => prev - 1)

    // setTimeout(() => {
    //   console.log(true)
    //   setIsAnimating(true)

    //   setActiveStep((prev) => prev - 1)
    // }, 300)
  };

  return (
    <Box sx={{ width: '100%', height: "100%" }}>
      <Stepper className='mb-5' activeStep={activeStep}>
        {steps.map(({label}, idx) => {
          const stepProps: { completed?: boolean } = {};
          if(isStepSkipped(idx)){
            stepProps.completed = false;
          }
          return(
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div className={`max-w-[450px] min-w-[320px] relative py-2 px-4 ${styles.content_container}`}>
        {/* <div className={`${styles.container}`}>
          <div className={`${styles.wrapper} ${isAnimating && styles.fade_in_custom}`}> */}
            {steps[activeStep].element}
          {/* </div>
        </div> */}
        {activeStep === 0 ? 
        <Box className="flex flex-row justify-end items-center mt-5">
          <ButtonCircleArrow action={handleNext} text="Next" iconPos="right" />
        </Box> 
        : activeStep === steps.length - 1 ? 
        <Box className="flex flex-row justify-end items-center mt-5">
          <ButtonCircleArrow action={handlePrev} text="Back" />
        </Box> : 
        <Box className="flex flex-row justify-between items-center mt-5">
          <ButtonCircleArrow action={handlePrev} text="Back" />
          <ButtonCircleArrow action={handleNext} text="Next" iconPos="right" />
        </Box>
        }
      </div>
    </Box>
  );
}