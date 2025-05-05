import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';

interface FinishPurchaseProps {
    handleReset: () => void
}

export default function FinishPurchaseStep({ handleReset }:FinishPurchaseProps) {
    return(<>
        <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
        </Box>
    </>);
};