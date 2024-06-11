import Box from '@mui/material/Box';
import Card from './Card/Card';

function ListCards() {
    return (
        <Box
            sx={{
                p: '0 5px',
                m: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: (theme) =>
                    `calc(${theme.trello.boardContenteight} - ${theme.spacing(5)} - ${
                        theme.trello.columnHeaderHeight
                    } - ${theme.trello.columnFooterHeight})`,
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
            }}
        >
            <Card />
        </Box>
    );
}

export default ListCards;
