import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface TicketsInputProps {
    quantityOfTickets: number,
    removeOneTicket: () => void,
    addOneTicket: () => void
}

export default function TicketsInputStep({ quantityOfTickets, removeOneTicket, addOneTicket }:TicketsInputProps) {
    return(<div>
        <Stack spacing={2} direction='row' alignItems='center'>

            <Fab color="primary" aria-label="remove one ticket" size="small" onClick={removeOneTicket} disabled={quantityOfTickets === 1}>
                <RemoveIcon />
            </Fab>

            <Typography variant='h3'>{quantityOfTickets}</Typography>

            <Fab color="primary" aria-label="add one ticket" size="small" onClick={addOneTicket} disabled={quantityOfTickets > 9}>
                <AddIcon />
            </Fab>

        </Stack>
    </div>);
};