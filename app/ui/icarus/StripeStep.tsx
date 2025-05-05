interface UserData {
    id: number,
    name: string,
    lastName: string,
    email: string;
}

interface StripeStepProps {
    userData: UserData[],
}

export default function StripeStep({ userData }:StripeStepProps) {
    console.log(userData);
    return(<>
        <h1>Stripe Integration</h1>
    </>);
};