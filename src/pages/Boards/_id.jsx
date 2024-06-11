import { Container } from '@mui/material';

import AppBar from '~/components/AppBar/AppBar';
import BoadBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';

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
