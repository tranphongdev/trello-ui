import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Cloud from '@mui/icons-material/Cloud';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tooltip from '@mui/material/Tooltip';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import AddCardIcon from '@mui/icons-material/AddCard';
import Button from '@mui/material/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Box from '@mui/material/Box';
import ListCards from './ListCards/ListCards';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useConfirm } from 'material-ui-confirm';

function Column({ column, createNewCard, deleteColumnDetails }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const orderedCards = column.cards;

    const [openNewCardForm, setOpenNewCardForm] = useState(false);
    const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm);
    const [newCardTitle, setNewCardTitle] = useState('');

    const addNewCard = () => {
        if (!newCardTitle) {
            toast.error('Please enter Card Title!', { position: 'bottom-right' });
            return;
        }

        // Tạo dữ liệu card để gọi API
        const newCardData = {
            title: newCardTitle,
            columnId: column._id,
        };

        // Gọi lên prop createNewCard nằm ở component cha cao nhất (board/_id.jsx)
        createNewCard(newCardData);

        // Đóng trạng thái & Clear input;
        toggleOpenNewCardForm();
        setNewCardTitle('');
    };

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: column._id,
        data: { ...column },
    });
    const dndKitColumnStyles = {
        // touchAction: 'none',
        transform: CSS.Translate.toString(transform),
        transition,
        height: '100%',
        opacity: isDragging ? 0.5 : undefined,
    };

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    // Xử lý xoá 1 column
    const confirmDeleteColumn = useConfirm();
    const handleDeleteColumn = () => {
        confirmDeleteColumn({
            title: 'Delete Column',
            description: 'This action is will permanently delete your Column and its Card! Are you sure?',
            confirmationText: 'Confirm',

            // allowClose: false,
            // confirmationButtonProps: { color: 'info', variant: 'outlined' },
            // cancellationButtonProps: { color: 'inherit' },
        })
            .then(() => {
                deleteColumnDetails(column._id);
            })
            .catch(() => {
                /* ... */
            });
    };

    return (
        <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
            <Box
                {...listeners}
                sx={{
                    minWidth: '300px',
                    maxWidth: '300px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                    ml: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardContenteight} - ${theme.spacing(5)})`,
                }}
            >
                {/* Box column header */}
                <Box
                    sx={{
                        height: (theme) => theme.trello.columnHeaderHeight,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}
                    >
                        {column?.title}
                    </Typography>
                    <Box>
                        <Tooltip title="More options">
                            <KeyboardArrowDownIcon
                                id="basic-menu-dropdown"
                                aria-controls={open ? 'basic-menu-column' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ color: 'text.primary', cursor: 'pointer' }}
                            />
                        </Tooltip>
                        <Menu
                            id="basic-menu-column"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-menu-dropdown',
                            }}
                        >
                            <MenuItem
                                onClick={toggleOpenNewCardForm}
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        '& .add-card-icon': { color: 'primary.main' },
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <AddCardIcon className="add-card-icon" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add new card</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCut fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Cut</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopy fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Coppy</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPaste fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem
                                onClick={handleDeleteColumn}
                                sx={{
                                    '&:hover': {
                                        color: 'warning.dark',
                                        '& .delete-forever-icon': { color: 'warning.dark' },
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <DeleteForeverIcon className="delete-forever-icon" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Delete this column</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Archive this column</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                {/* Box column list card */}
                <ListCards cards={orderedCards} />

                {/* Box column footer */}
                <Box
                    sx={{
                        height: (theme) => theme.trello.columnFooterHeight,
                        p: 2,
                    }}
                >
                    {!openNewCardForm ? (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '100%',
                            }}
                        >
                            <Button onClick={toggleOpenNewCardForm} startIcon={<AddCardIcon />}>
                                Add new card
                            </Button>
                            <Tooltip title="Drag to move">
                                <DragHandleIcon sx={{ cursor: 'pointer' }} />
                            </Tooltip>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <TextField
                                label="Enter column title ..."
                                type="text"
                                size="small"
                                variant="outlined"
                                autoFocus
                                data-no-dnd="true"
                                value={newCardTitle}
                                onChange={(e) => setNewCardTitle(e.target.value)}
                                sx={{
                                    '& label': { color: 'text.primary' },
                                    '& input': {
                                        color: (theme) => theme.palette.primary.main,
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : 'white'),
                                    },
                                    '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: (theme) => theme.palette.primary.main },
                                        '&:hover fieldset': { borderColor: (theme) => theme.palette.primary.main },
                                        '&.Mui-focused fieldset': {
                                            borderColor: (theme) => theme.palette.primary.main,
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        borderRadius: 1,
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Button
                                    data-no-dnd="true"
                                    onClick={addNewCard}
                                    variant="contained"
                                    color="success"
                                    size="small"
                                    sx={{
                                        boxShadow: 'none',
                                        border: '0.5px solid',
                                        borderColor: (theme) => theme.palette.success.main,
                                        '&:hover': { bgcolor: (theme) => theme.palette.success.main },
                                    }}
                                >
                                    Add
                                </Button>
                                <CloseIcon
                                    fontSize="small"
                                    sx={{
                                        color: (theme) => theme.palette.warning.light,
                                        cursor: 'pointer',
                                    }}
                                    onClick={toggleOpenNewCardForm}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default Column;
