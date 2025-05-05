'use client';
import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { UserData } from '@/app/lib/definitions';
import styles from '@/app/ui/icarus/purchaseApp.module.css';

interface CheckoutProps {
    amount: number;
}

const CheckoutPage: React.FC<CheckoutProps> = ({ amount }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [ errorMessage, setErrorMessage ] = useState<string>();
    const [ clientSecret, setClientSecret ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() => {

        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount*100 }),
        })
        .then((response) => response.json())
        .then((data) => setClientSecret(data.clientSecret))

    }, [amount]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if( !stripe || !elements ) {
            return;
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message || 'An error occurred during payment submission.');
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `https://quentry.vercel.app/festivalDelEmbudo/compraExitosa?amount=${amount}`,
            },
        });

        if( error ) {
            setErrorMessage(error.message || 'An error occurred during payment confirmation.');
        }

        setLoading(false);
    };

    if( !clientSecret || !stripe || !elements ) {
        return (
            <div className={styles.checkoutLoader}>
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            { clientSecret && <PaymentElement /> }
            
            { errorMessage && <div className={styles.checkoutError}>{errorMessage}</div> }

            
            <button
                disabled={!stripe || loading || !clientSecret}
                className={styles.checkoutPayButton}
            >
                { loading ? 'Procesando...' : `Pagar ${amount} MXN`}
            </button>   
            </form>
        </div>
    );
};

export default CheckoutPage;