import Box from '@mui/material/Box';
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';

import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import { useEffect, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

function BoardContent({ board }) {
    // https://docs.dndkit.com/api-documentation/sensors
    // const poiterSensor = useSensor(PointerSensor, {activationConstraint: { distance: 10, }, });
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10,
        },
    });
    // Nhấn giữ 250ms va dung sai của cảm ứng thì mới kích hoạt event (di chuyển lệch 500px)
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 500,
        },
    });

    // const sensors = useSensors(poiterSensor);
    // Sử dụng 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất
    const sensors = useSensors(mouseSensor, touchSensor);

    const [orderedColumns, setOrderedColumns] = useState([]);

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
    }, [board]);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        // Kéo linh tinh ra ngoài thì return luôn
        if (!over) return;

        if (active.id !== over.id) {
            // Lấy vị trí cũ từ thằng active
            const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
            // Lấy vị trí mới từ thằng active
            const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

            // Dùng araymove sắp xếp lại mảng column
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
            // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);

            // Cập nhật state sau khi kéo thả
            setOrderedColumns(dndOrderedColumns);
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Box
                sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                    width: '100%',
                    height: (theme) => theme.trello.boardContenteight,
                    display: 'flex',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    p: '10px 0',
                }}
            >
                <ListColumns columns={orderedColumns} />
            </Box>
        </DndContext>
    );
}

export default BoardContent;
