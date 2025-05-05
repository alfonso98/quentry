interface UserData {
    id: number,
    name: string,
    lastName: string,
    email: string;
}

interface StrippeStepProps {
    userData: UserData[],
}

export default function StrippeStep({ userData }:StrippeStepProps) {
    console.log(userData);
    return(<>
        <h1>Strippe Integration</h1>
    </>);
};