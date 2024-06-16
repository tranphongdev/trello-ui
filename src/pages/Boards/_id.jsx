import { Container } from '@mui/material';

import AppBar from '~/components/AppBar/AppBar';
import BoadBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
// import { mockData } from '~/apis/mock-data';
import { useEffect, useState } from 'react';
import { createNewCardAPI, createNewColumnAPI, fetchBoardDetailsAPI } from '~/apis';

function Board() {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const boardId = '666dabcb95b034b88d4f7f4f';
        fetchBoardDetailsAPI(boardId).then((board) => setBoard(board));
    }, []);

    const createNewColumn = async (newColumnData) => {
        const createdColumn = await createNewColumnAPI({
            ...newColumnData,
            boardId: board._id,
        });
        console.log(createdColumn);

        // Cập nhật lại state board
    };

    const createNewCard = async (newCardData) => {
        const createdCard = await createNewCardAPI({
            ...newCardData,
            boardId: board._id,
        });
        console.log(createdCard);

        // Cập nhật lại state board
    };

    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoadBar board={board} />
            <BoardContent createNewColumn={createNewColumn} board={board} createNewCard={createNewCard} />
        </Container>
    );
}

export default Board;
