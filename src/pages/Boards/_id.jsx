import { isEmpty } from 'lodash';
import { Box, CircularProgress, Container, Typography } from '@mui/material';

import AppBar from '~/components/AppBar/AppBar';
import BoadBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
import { mapOrder } from '~/utils/sorts';
// import { mockData } from '~/apis/mock-data';
import { useEffect, useState } from 'react';
import {
    createNewCardAPI,
    createNewColumnAPI,
    deleteColumnDetailsAPI,
    fetchBoardDetailsAPI,
    moveCardToDifferentColumnAPI,
    updateBoardDetailsAPI,
    updateColumnDetailsAPI,
} from '~/apis';
import { generatePlaceholderCard } from '~/utils/formatters';
import { toast } from 'react-toastify';

function Board() {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const boardId = '666dabcb95b034b88d4f7f4f';

        fetchBoardDetailsAPI(boardId).then((board) => {
            board.columns = mapOrder(board.columns, board.columnOrderIds, '_id');
            // Xử lý vấn đề kéo thả column rỗng
            board.columns.forEach((column) => {
                if (isEmpty(column.cards)) {
                    column.cards = [generatePlaceholderCard(column)];
                    column.cardOrderIds = [generatePlaceholderCard(column)._id];
                } else {
                    column.cards = mapOrder(column.cards, column.cardOrderIds, '_id');
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
        // Nếu column rỗng (chứa FE_PlaceholderCard)
        if (columnToUpdate) {
            if (columnToUpdate.cards.some((card) => card.FE_PlaceholderCard)) {
                columnToUpdate.cards = [createdCard];
                columnToUpdate.cardOrderIds = [createdCard._id];
            } else {
                // Ngược lại có data thì push vào cuối mảng
                columnToUpdate.cards.push(createdCard);
                columnToUpdate.cardOrderIds.push(createdCard._id);
            }
        }
        setBoard(newBoard);
    };

    const moveColumns = (dndOrderedColumns) => {
        // Update cho chuẩn dữ liệu state Board
        const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
        const newBoard = { ...board };
        newBoard.columns = dndOrderedColumns;
        newBoard.columnOrderIds = dndOrderedColumnsIds;
        setBoard(newBoard);

        // Gọi api update board
        updateBoardDetailsAPI(newBoard._id, { columnOrderIds: dndOrderedColumnsIds });
    };

    // Khi di chuyển card trong cùng column
    // Chỉ cần gọi api để cập nhật mảng CardOrderIds của column chứa nó
    const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
        const newBoard = { ...board };
        const columnToUpdate = newBoard.columns.find((column) => column._id === columnId);
        if (columnToUpdate) {
            columnToUpdate.cards = dndOrderedCards;
            columnToUpdate.cardOrderIds = dndOrderedCardIds;
        }
        setBoard(newBoard);

        updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardIds });
    };

    const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
        // Update cho chuẩn dữ liệu state Board
        const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
        const newBoard = { ...board };
        newBoard.columns = dndOrderedColumns;
        newBoard.columnOrderIds = dndOrderedColumnsIds;
        setBoard(newBoard);

        let prevCardOrderIds = dndOrderedColumns.find((c) => c._id === prevColumnId)?.cardOrderIds;
        // Xử lý vấn đề khi kéo phần tử cuối cùng ra khỏi column, Column rỗng sẽ có placeholder-card, cần xoá đi trước khi gửi dữ liệu cho BE
        if (prevCardOrderIds[0].includes('placeholder-card')) prevCardOrderIds = [];

        // Gọi API xử lý phía BE
        moveCardToDifferentColumnAPI({
            currentCardId,
            prevColumnId,
            prevCardOrderIds,
            nextColumnId,
            nextCardOrderIds: dndOrderedColumns.find((c) => c._id === nextColumnId)?.cardOrderIds,
        });
    };

    const deleteColumnDetails = (columnId) => {
        const newBoard = { ...board };
        newBoard.columns = newBoard.columns.filter((c) => c._id !== columnId);
        newBoard.columnOrderIds = newBoard.columnOrderIds.filter((_id) => _id !== columnId);
        setBoard(newBoard);

        deleteColumnDetailsAPI(columnId).then((res) => {
            toast.success(res?.deleteResult);
        });
    };

    if (!board) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <CircularProgress />
                <Typography>Loading Board ...</Typography>
            </Box>
        );
    }

    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoadBar board={board} />
            <BoardContent
                createNewColumn={createNewColumn}
                board={board}
                createNewCard={createNewCard}
                moveColumns={moveColumns}
                moveCardInTheSameColumn={moveCardInTheSameColumn}
                moveCardToDifferentColumn={moveCardToDifferentColumn}
                deleteColumnDetails={deleteColumnDetails}
            />
        </Container>
    );
}

export default Board;
