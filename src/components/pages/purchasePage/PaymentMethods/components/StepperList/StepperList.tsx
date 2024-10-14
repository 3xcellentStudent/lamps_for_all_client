import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import { StepsListType } from '@/types/payment/elements';
import ShippingForm from '@/components/pages/purchasePage/ShippingForm/ShippingForm';
import PaymentMethods from '../../PaymentMethods';
import ButtonCircleArrow from '@/components/common/Buttons/ButtonCircleArrow';


export default function StepperList(){
  
  const steps: StepsListType[] = [
    {label: "Shipping Address", element: <ShippingForm/>}, 
    {label: "Check Out", element: <PaymentMethods/>}
  ]
  
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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
      <div className="max-w-[450px] min-w-[320px] relative py-2 px-4 h-[93%] overflow-y-auto">
        {steps[activeStep].element}
        {activeStep === 0 ? 
        <Box className="flex flex-row justify-end items-center mt-5">
          <ButtonCircleArrow action={handleNext} text="Next" iconPos="right" />
        </Box> 
        : activeStep === steps.length - 1 ? 
        <Box className="flex flex-row justify-end items-center mt-5">
          <ButtonCircleArrow action={() => setActiveStep((prev) => prev - 1)} text="Back" />
        </Box> : 
        <Box className="flex flex-row justify-between items-center mt-5">
          <ButtonCircleArrow action={() => setActiveStep((prev) => prev - 1)} text="Back" />
          <ButtonCircleArrow action={handleNext} text="Next" iconPos="right" />
        </Box>
        }
      </div>
    </Box>
  );
}