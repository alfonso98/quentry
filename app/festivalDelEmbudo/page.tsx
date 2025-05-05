'use client';
import styles from '@/app/ui/icarus/purchaseApp.module.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TicketsInputStep from '../ui/icarus/TicketsInputStep';
import BuyerInformationStep from '../ui/icarus/BuyerInfoStep';
import StrippeStep from '../ui/icarus/StrippeStep';
import FinishPurchaseStep from '../ui/icarus/FinishPurchaseStep';
import { set } from 'zod';

interface UserData {
    id: number,
    name: string,
    lastName: string,
    email: string;
}

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

    const [ quantityOfTickets, setQuantityOfTickets ] = useState(1);
    const [ userData, setUserData ] = useState([{
        id: 1,
        name: '',
        lastName: '',
        email: ''
    }]);

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

    const addOneTicket = () => {
        setQuantityOfTickets((prevQuantity) => prevQuantity + 1);
        setUserData((prevUserData) => {
            const newUserData = [...prevUserData];
            newUserData.push({ id: prevUserData.length +1 ,name: '', lastName: '', email: '' });
            return newUserData;
        });
    };

    const removeOneTicket = () => {
        setQuantityOfTickets((prevQuantity) => prevQuantity - 1);
        setUserData((prevUserData) => {
            const newUserData = [...prevUserData];
            newUserData.pop();
            return newUserData;
        });
    };

    const handleUserDataChange = (updatedUser: UserData): void => {
        console.log('userData', updatedUser);
        setUserData((prevUserData) => {
            const users = [...prevUserData];
            users[updatedUser.id - 1] = updatedUser;
            return users;
        });
    };

    const StepViewer = () => {
        return (
            <>

            { activeStep === 0 ? 
            <TicketsInputStep
                quantityOfTickets={quantityOfTickets}
                removeOneTicket={removeOneTicket}
                addOneTicket={addOneTicket}
            /> : null }

            { activeStep === 1 ?
            <BuyerInformationStep
                userData={userData}
                retrieveData={handleUserDataChange}
            /> : null }

            { activeStep === 2 ?
            <StrippeStep
                userData={userData}
            /> : null }

            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

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
        <div className={styles.mainContainer}>
            
            <div className={styles.posterContainer}>

            <Stack>

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

            { activeStep === steps.length ?
            <FinishPurchaseStep
                handleReset={handleReset}
            /> : <StepViewer/> }

            </Stack>

            </div>

        </div>
    );
};