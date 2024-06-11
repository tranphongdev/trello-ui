import { useState } from 'react';
import Box from '@mui/material/Box';
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';

function BoardContent() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
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
                {/* Box Column 1*/}
                <Box
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
                            height: COLUMN_HEADER_HEIGHT,
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
                            Column Title
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
                                MenuListProps={{
                                    'aria-labelledby': 'basic-menu-dropdown',
                                }}
                            >
                                <MenuItem>
                                    <ListItemIcon>
                                        <AddCardIcon fontSize="small" />
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
                                <MenuItem>
                                    <ListItemIcon>
                                        <DeleteForeverIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Remove this column</ListItemText>
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
                    <Box
                        sx={{
                            p: '0 5px',
                            m: '0 5px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            maxHeight: (theme) => `calc(${theme.trello.boardContenteight} - ${theme.spacing(5)} -
                        ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
                            '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
                        }}
                    >
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://i.pinimg.com/736x/e0/23/ec/e023ec23f430e4d5273bc51e193e9f2a.jpg"
                                title="green iguana"
                            />
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>TranPhongDev</Typography>
                            </CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<GroupIcon />}>
                                    20
                                </Button>
                                <Button size="small" startIcon={<CommentIcon />}>
                                    15
                                </Button>
                                <Button size="small" startIcon={<AttachmentIcon />}>
                                    10
                                </Button>
                            </CardActions>
                        </Card>

                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>

                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Box column footer */}
                    <Box
                        sx={{
                            height: COLUMN_FOOTER_HEIGHT,
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button startIcon={<AddCardIcon />}>Add new card</Button>
                        <Tooltip title="Drag to move">
                            <DragHandleIcon sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                    </Box>
                </Box>

                {/* Box Column 2*/}
                <Box
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
                            height: COLUMN_HEADER_HEIGHT,
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
                            Column Title
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
                                MenuListProps={{
                                    'aria-labelledby': 'basic-menu-dropdown',
                                }}
                            >
                                <MenuItem>
                                    <ListItemIcon>
                                        <AddCardIcon fontSize="small" />
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
                                <MenuItem>
                                    <ListItemIcon>
                                        <DeleteForeverIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Remove this column</ListItemText>
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
                    <Box
                        sx={{
                            p: '0 5px',
                            m: '0 5px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            maxHeight: (theme) => `calc(${theme.trello.boardContenteight} - ${theme.spacing(5)} -
                        ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
                            '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
                        }}
                    >
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://i.pinimg.com/736x/e0/23/ec/e023ec23f430e4d5273bc51e193e9f2a.jpg"
                                title="green iguana"
                            />
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>TranPhongDev</Typography>
                            </CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<GroupIcon />}>
                                    20
                                </Button>
                                <Button size="small" startIcon={<CommentIcon />}>
                                    15
                                </Button>
                                <Button size="small" startIcon={<AttachmentIcon />}>
                                    10
                                </Button>
                            </CardActions>
                        </Card>

                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                overflow: 'unset',
                            }}
                        >
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                                <Typography>Lizard</Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Box column footer */}
                    <Box
                        sx={{
                            height: COLUMN_FOOTER_HEIGHT,
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button startIcon={<AddCardIcon />}>Add new card</Button>
                        <Tooltip title="Drag to move">
                            <DragHandleIcon sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default BoardContent;
