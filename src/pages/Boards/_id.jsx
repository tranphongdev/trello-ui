import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AppBar from '~/components/AppBar';
import BoadBar from './BoardBar';
import BoardContent from './BoardContent';

function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoadBar />
            <BoardContent />
        </Container>
    );
}

export default Board;
