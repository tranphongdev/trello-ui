import { Container } from '@mui/material';

import AppBar from '~/components/AppBar/AppBar';
import BoadBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
// import { mockData } from '~/apis/mock-data';
import { useEffect, useState } from 'react';
import { createNewCardAPI, createNewColumnAPI, fetchBoardDetailsAPI } from '~/apis';
import { generatePlaceholderCard } from '~/utils/formatters';
import { isEmpty } from 'lodash';

function Board() {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const boardId = '666dabcb95b034b88d4f7f4f';

        fetchBoardDetailsAPI(boardId).then((board) => {
            // Xử lý vấn đề kéo thả column rỗng
            board.columns.forEach((column) => {
                if (isEmpty(column.cards)) {
                    column.cards = [generatePlaceholderCard(column)];
                    column.cardOrderIds = [generatePlaceholderCard(column)._id];
                }
            });
            setBoard(board);
        });
    }, []);

    const createNewColumn = async (newColumnData) => {
        const createdColumn = await createNewColumnAPI({
            ...newColumnData,
            boardId: board._id,
        });

        createdColumn.cards = [generatePlaceholderCard(createdColumn)];
        createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id];

        // Cập nhật lại state board
        const newBoard = {
            ...board,
        };
        newBoard.columns.push(createdColumn);
        newBoard.columnOrderIds.push(createdColumn._id);
        setBoard(newBoard);
    };

    const createNewCard = async (newCardData) => {
        const createdCard = await createNewCardAPI({
            ...newCardData,
            boardId: board._id,
        });

        // Cập nhật lại state board
        const newBoard = {
            ...board,
        };
        const columnToUpdate = newBoard.columns.find((column) => column._id === createdCard.columnId);
        if (columnToUpdate) {
            columnToUpdate.cards.push(createdCard);
            columnToUpdate.cardOrderIds.push(createdCard._id);
        }
        setBoard(newBoard);
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
