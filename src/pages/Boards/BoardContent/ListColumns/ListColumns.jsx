import Box from '@mui/material/Box';

import Column from './Column/Column';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

function ListColumns({ columns }) {
    return (
        <Box
            sx={{
                bgcolor: 'inherit',
                width: '100%',
                height: '100%',
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
                '&::-webkit-scrollbar-track': { m: 2 },
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
            }}
        >
            {columns?.map((column) => (
                <Column key={column._id} column={column} />
            ))}

            {/* Box add new column */}
            <Box
                sx={{
                    minWidth: '200px',
                    maxWidth: '200px',
                    mx: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    bgcolor: '#ffffff3d',
                }}
            >
                <Button
                    sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
                    startIcon={<AddBoxIcon />}
                >
                    Add new column
                </Button>
            </Box>
        </Box>
    );
}

export default ListColumns;
