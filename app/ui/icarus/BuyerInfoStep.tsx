'use client';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InfoCard from './InfoCard';

interface UserData {
    id: number,
    name: string,
    lastName: string,
    email: string;
}

interface BuyerInformationProps {
    userData: UserData[],
    handleDataChange: (index: number, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputName = ({ name, index, handlerInput }:{name:string, index:number, handlerInput:(index:number, event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void}) => {
    
    const [nameValue, setNameValue] = useState(name);

    const handler = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNameValue(event.target.value);
        handlerInput(index, event);
    }

    return (<>
        <input
            name='name'
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
        <input
            name='lastName'
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
        <input
            name='email'
            placeholder='Correo Electronico'
            value={emailValue}
            onChange={handler}
        />
    </>);

}

export default function BuyerInformationStep({ userData, handleDataChange }:BuyerInformationProps) {

    return(<div>
        <Stack spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Typography variant="body1">Por favor proporciona los datos de los asistentes</Typography>

            <form>
                {userData.map((user, index) => {
                    return (
                        <div key={user.id}>
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
            </form>

        </Stack>
    </div>);
};