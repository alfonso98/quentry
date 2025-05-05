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
import StripeStep from '../ui/icarus/StripeStep';
import FinishPurchaseStep from '../ui/icarus/FinishPurchaseStep';

interface UserData {
    id: number;
    name: string;
    lastName: string;
    email: string;
}

export default function Page(){

    const [ activeStep, setActiveStep ] = useState(0);
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
    const [ userData, setUserData ] = useState<UserData[]>([{
        id: 1,
        name: '',
        lastName: '',
        email: ''
    }]);

    // const validateFields = () => {

    // };

    const handleNext = () => {

        // if( activeStep === 1 ){
        //     validateFields();
        // }

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

    const handleUserDataChange = (index: number, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {

        setUserData((prevUserData) => {
            let aux = prevUserData;
            aux[index] = {
                ...prevUserData[index],
                [event.target.name]: event.target.value,
            };
            return aux;
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
                handleDataChange={handleUserDataChange}
            /> : null }

            { activeStep === 2 ? <StripeStep userData={userData}/> : null }

            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Regresar
                </Button>

                <Box sx={{ flex: '1 1 auto' }} />

                { activeStep < 2 && <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>}
                

            </Box>
            </>
        );
    };

    return (
        <>
        <Stack justifyContent='center' alignItems='center' spacing={2}>

            <Stepper activeStep={activeStep} alternativeLabel className={styles.headStepper}>
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
        </>);
};