import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';

// import AppsIcon from '@mui/icons-material/Apps';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

import ModeSelect from '~/components/ModeSelect/ModeSelect';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Teamplates from './Menus/Teamplates';
import Profiles from './Menus/Profiles';
import { InputAdornment } from '@mui/material';

function AppBars() {
    const [searchValue, setSearchValue] = useState('');
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
                boxShadow: 'none',
            }}
        >
            <Container disableGutters maxWidth={false}>
                <Toolbar disableGutters>
                    {/* Icon Bars */}
                    <IconButton
                        size="large"
                        aria-label="open drawer"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{ display: { xs: 'flex', lg: 'none' } }}
                    >
                        <ListOutlinedIcon sx={{ color: 'white' }} />
                    </IconButton>

                    {/* Icon Apps */}
                    {/* <AppsIcon
                        sx={{
                            color: 'white',
                            cursor: 'pointer',
                            display: { xs: 'none', lg: 'flex' },
                            mx: 2,
                        }}
                    /> */}

                    {/* Logo Trello */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mx: { md: 0, lg: 2 },
                            display: { xs: 'none', md: 'flex', alignItems: 'center', gap: '8px' },
                            fontWeight: 'bold',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        <AssessmentIcon sx={{ color: 'white' }} />
                        Trello
                    </Typography>

                    {/* Menu Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            <Workspaces />
                            <Recent />
                            <Starred />
                            <Teamplates />
                            <Button
                                sx={{
                                    color: 'primary.main',
                                    border: 'none',
                                    '&:hover': {
                                        border: 'none',
                                    },
                                }}
                                variant="outlined"
                                startIcon={<AddToPhotosIcon />}
                            >
                                Create
                            </Button>
                        </Menu>
                    </Box>

                    {/* Logo Trello Mobile */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            display: { xs: 'flex', md: 'none', alignItems: 'center', gap: 1 },
                            justifyContent: { xs: 'center', sm: 'start' },
                            ml: { sm: 4 },
                            flexGrow: 1,
                            fontWeight: 'bold',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        <AssessmentIcon sx={{ color: 'white' }} />
                        Trello
                    </Typography>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
                        <Workspaces />
                        <Recent />
                        <Starred />
                        <Teamplates />
                        <Button
                            sx={{
                                color: 'white',
                                border: 'none',
                                '&:hover': {
                                    border: 'none',
                                },
                            }}
                            variant="outlined"
                            startIcon={<AddToPhotosIcon />}
                        >
                            Create
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <TextField
                            id="outlined-search"
                            label="Search"
                            type="text"
                            size="small"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <CloseIcon
                                        fontSize="small"
                                        sx={{
                                            color: searchValue ? 'white' : 'transparent',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => setSearchValue('')}
                                    />
                                ),
                            }}
                            sx={{
                                minWidth: '120px',
                                maxWidth: '180px',
                                '& label': { color: 'white' },
                                '& input': { color: 'white' },
                                '& label.Mui-focused': { color: 'white' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'white' },
                                    '&:hover fieldset': { borderColor: 'white' },
                                    '&.Mui-focused fieldset': { borderColor: 'white' },
                                },
                            }}
                        />
                        <ModeSelect />
                    </Box>

                    {/* Profile */}
                    <Box sx={{ flexGrow: 0, px: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Tooltip title="Notification">
                            <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }}>
                                <NotificationsNoneIcon sx={{ color: 'white' }} />
                            </Badge>
                        </Tooltip>
                        <Tooltip title="Help">
                            <HelpOutlineIcon sx={{ color: 'white', cursor: 'pointer' }} />
                        </Tooltip>
                        <Profiles />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppBars;
