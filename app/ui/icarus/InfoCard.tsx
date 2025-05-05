import { useState, useEffect } from "react";
import React from "react";
import styles from '@/app/ui/icarus/purchaseApp.module.css';
import TextField from '@mui/material/TextField';

interface UserData {
    id: number,
    name: string,
    lastName: string,
    email: string;
}

interface InfoCardProps {
    index: number;
    required: boolean;
    getData: (userData:UserData) => void;
}

export default function InfoCard({ index, required, getData }:InfoCardProps) {

    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleNameChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleLastNameChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    useEffect(() => {

        if(name || lastName || email ) getData({ id: index, name, lastName, email });
        
    }, [name, lastName, email]);

    return(<>
    <div className={styles.buyerInfoCard}>
        <p>Boleto { index + 1 } </p>

        <TextField
            fullWidth
            size="small"
            label="Nombre"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
        />

        <TextField
            fullWidth
            size="small"
            label="Apellido"
            name="lastname"
            value={lastName}
            onChange={handleLastNameChange}
            required
        />

        <TextField
            fullWidth
            size="small"
            label="Correo"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required={required}
        />

    </div>
    </>);
};