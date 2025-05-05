'use client';
import CheckoutPage from '@/app/ui/icarus/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from '@/app/ui/icarus/purchaseApp.module.css';

interface UserData {
    id: number,
    name: string,
    lastName: string,
    email: string;
}

interface StripeStepProps {
    userData: UserData[],
}

if( process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined ){
    throw new Error('Stripe public key is not defined in the environment variables.');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

export default function StripeStep({ userData }:StripeStepProps) {
    
    const ticketPrice = 210; // Price in MXN

    return(<div className={styles.stripeContainer}>
        <Elements
            stripe={stripePromise}
            options={{
                mode: 'payment',
                amount: userData.length*ticketPrice*100,
                currency: 'mxn',
            }} 
        >
            <CheckoutPage amount={userData.length*ticketPrice} />
        </Elements>
    </div>);
};