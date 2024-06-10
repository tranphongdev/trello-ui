import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    Tooltip,
    Menu,
    MenuItem,
    Badge,
    TextField,
} from '@mui/material';
import {
    Apps as AppsIcon,
    Assessment as AssessmentIcon,
    AddToPhotos as AddToPhotosIcon,
    NotificationsNone as NotificationsNoneIcon,
    HelpOutline as HelpOutlineIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';

import ModeSelect from '~/components/ModeSelect/ModeSelect';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Teamplates from './Menus/Teamplates';
import Profiles from './Menus/Profiles';

const pages = ['Workspaces', 'Recent', 'Starred', 'Teamplates'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container disableGutters maxWidth={false}>
                <Toolbar disableGutters>
                    {/* Icon Bars */}
                    <IconButton
                        size="large"
                        aria-label="open drawer"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{ display: { xs: 'flex', lg: 'none', color: 'primary.main' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Icon Apps */}
                    <AppsIcon
                        sx={{
                            color: 'primary.main',
                            cursor: 'pointer',
                            display: { xs: 'none', lg: 'flex' },
                            mx: 2,
                        }}
                    />

                    {/* Logo Trello */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex', alignItems: 'center', gap: 1 },
                            fontWeight: 'bold',
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        <AssessmentIcon sx={{ color: 'primary.main' }} />
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
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        <AssessmentIcon sx={{ color: 'primary.main' }} />
                        Trello
                    </Typography>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
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
                        <TextField id="outlined-search" size="small" label="Search..." type="search" />
                        <ModeSelect />
                    </Box>

                    <Box sx={{ flexGrow: 0, px: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Tooltip title="Notification">
                            <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }}>
                                <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
                            </Badge>
                        </Tooltip>
                        <Tooltip title="Help">
                            <HelpOutlineIcon sx={{ color: 'primary.main', cursor: 'pointer' }} />
                        </Tooltip>
                        <Profiles />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
