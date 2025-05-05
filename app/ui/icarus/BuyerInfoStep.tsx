'use client';
import { useState } from 'react';
import styles from '@/app/ui/icarus/purchaseApp.module.css';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { UserData } from '@/app/lib/definitions';

interface BuyerInformationProps {
    userData: UserData[],
    handleDataChange: (index: number, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    errorMessage: string,
}

const InputName = ({ name, index, handlerInput }:{name:string, index:number, handlerInput:(index:number, event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void}) => {
    
    const [nameValue, setNameValue] = useState(name);

    const handler = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNameValue(event.target.value);
        handlerInput(index, event);
    }

    return (<>
        <TextField
            fullWidth
            size="small"
            name='name'
            label="Nombre(s)"
            placeholder='Nombre(s)'
            value={nameValue}
            onChange={handler}
        />
    </>);

};

const InputLastName = ({ lastName, index, handlerInput }:{lastName:string, index:number, handlerInput:(index:number, event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void}) => {
    
    const [lastNameValue, setLastNameValue] = useState(lastName);

    const handler = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLastNameValue(event.target.value);
        handlerInput(index, event);
    }

    return (<>
        <TextField
            fullWidth
            size="small"
            name='lastName'
            label="Apellidos"
            placeholder='Apellidos'
            value={lastNameValue}
            onChange={handler}
        />
    </>);

};

const InputEmail = ({ email, index, handlerInput }:{email:string, index:number, handlerInput:(index:number, event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void}) => {
    
    const [emailValue, setEmailValue] = useState(email);

    const handler = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmailValue(event.target.value);
        handlerInput(index, event);
    }

    return (<>
        <TextField
            fullWidth
            size="small"
            name='email'
            label="Correo Electronico"
            type='email'
            placeholder='Correo Electronico'
            value={emailValue}
            onChange={handler}
        />
    </>);

}

export default function BuyerInformationStep({ userData, handleDataChange, errorMessage }:BuyerInformationProps) {

    return(<div className={styles.buyerInfoContainer}>
        <Stack spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
            <Typography variant="body1">Por favor proporciona los datos de los asistentes</Typography>

            <form>
                {userData.map((user, index) => {
                    return (
                        <div key={user.id} className={styles.buyerInfoCard}>
                            <p>Boleto { index + 1 } </p>
                            <InputName
                                name={user.name}
                                index={index}
                                handlerInput={handleDataChange}
                            />
                            <InputLastName
                                lastName={user.lastName}
                                index={index}
                                handlerInput={handleDataChange}
                            />
                            <InputEmail
                                email={user.email}
                                index={index}
                                handlerInput={handleDataChange}
                            />
                        </div>
                    )
                })}

                
                { errorMessage && <div className={styles.checkoutError}>{errorMessage}</div> }
                
            </form>

        </Stack>
    </div>);
};