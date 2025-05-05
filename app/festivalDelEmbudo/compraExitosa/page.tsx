import { Stack } from "@mui/material";
import Link from "next/link";
import styles from '@/app/ui/icarus/landing.module.css';

export default function Page() {
    return (<>
        <Stack direction='column' justifyContent='center' alignItems='center' spacing={2} >
            <h1>Gracias por tu compra!</h1>
            <p>Tu compra ha sido exitosa. Te esperamos en el festival!</p>
            <Link
                href='/'
                className={styles.mainCallToAction}
            >
                Regresar
            </Link>

        </Stack>
    </>);
}