import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Card() {
    return (
        <MuiCard
            sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                overflow: 'unset',
            }}
        >
            <CardMedia
                sx={{ height: 140 }}
                image="https://i.pinimg.com/originals/a3/ef/85/a3ef85411a6084b9d1cf26b7c5293b5e.gif"
                title="green iguana"
            />
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>TranPhongDev</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>
                    20
                </Button>
                <Button size="small" startIcon={<CommentIcon />}>
                    15
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                    10
                </Button>
            </CardActions>
        </MuiCard>
    );
}

export default Card;
