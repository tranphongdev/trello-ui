import { Container } from '@mui/material';

import AppBar from '~/components/AppBar/AppBar';
import BoadBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
import { mockData } from '~/apis/mock-data';
import { useEffect, useState } from 'react';
import { fetchBoardDetailsAPI } from '~/apis';

function Board() {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const boardId = '666d4de2ebcd8206e719d8d0';
        fetchBoardDetailsAPI(boardId).then((board) => setBoard(board));
    }, []);

    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoadBar board={board} />
            <BoardContent board={board} />
        </Container>
    );
}

export default Board;
