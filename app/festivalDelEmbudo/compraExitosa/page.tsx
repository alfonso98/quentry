'use client';
import { Stack } from "@mui/material";
import Link from "next/link";
import styles from '@/app/ui/icarus/landing.module.css';
import { useSearchParams } from 'next/navigation';

export default function Page() {

    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');
    const paymentIntent = searchParams.get('payment_intent');
    const clientSecret = searchParams.get('payment_intent_client_secret');
    const redirectStatus = searchParams.get('redirect_status');


    return (<div>
        <Stack direction='column' justifyContent='center' alignItems='center' spacing={2} >
            <h1>Gracias por tu compra!</h1>
            <p>Tu compra ha sido exitosa. Te esperamos en el festival!</p>
            {/* <ul>
                <li>Amount {amount}</li>
                <li>Payment Intent {paymentIntent}</li>
                <li>Client Secret {clientSecret}</li>
                <li>Redirect Status {redirectStatus}</li>

            </ul> */}
            <Link
                href='/'
                className={styles.mainCallToAction}
            >
                Regresar
            </Link>

        </Stack>
    </div>);
}