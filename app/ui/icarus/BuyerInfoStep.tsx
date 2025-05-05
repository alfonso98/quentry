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
    retrieveData: (userData: UserData) => void;
}

export default function BuyerInformationStep({ userData, retrieveData }:BuyerInformationProps) {

    const handler = (userData:UserData) => {
        // retrieveData(userData);
        console.log('userData', userData);
    };

    return(<div>
        <Stack spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Typography variant="body1">Por favor proporciona los datos de los asistentes</Typography>

            {userData.map((user, index) => (
                <InfoCard
                    key={user.id}
                    index={index}
                    required={index === 0}
                    getData={handler}
                />
            ))}

        </Stack>
    </div>);
};