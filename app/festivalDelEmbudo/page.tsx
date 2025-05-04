'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Page(){

    const [activeStep, setActiveStep] = useState(0);
    const [ steps, setSteps ] = useState([
        {
            label:'Selecciona tus boletos',
            completed: false
        },
        {
            label:'Proporciona tus datos',
            completed: false
        },
        {
            label:'Realiza tu pago',
            completed: false
        },
    ]);

    const handleNext = () => {
        setSteps((prevSteps) => {
            const newSteps = [...prevSteps];
            newSteps[activeStep].completed = true;
            return newSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setSteps((prevSteps) => {
            const newSteps = [...prevSteps];
            newSteps[activeStep].completed = false;
            return newSteps;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
        setSteps((prevSteps) => {
            const newSteps = [...prevSteps];
            newSteps.forEach((step) => (step.completed = false));
            return newSteps;
        });
    };

    const FinishProccess = () => {
        return (
            <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you're finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
            </>
        );
    };

    const StepViewer = () => {
        return (
            <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>

                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>

            </Box>
            </>
        );
    };

    return (
        <div>
            <Box sx={{ width: '50%' }}>

            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map( ( { label, completed } ) => {

                        return (
                            <Step key={label} completed={completed}>
                                <StepLabel> {label} </StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>

            { activeStep === steps.length ? <FinishProccess/> : <StepViewer/> }

            </Box>
        </div>
    );
};