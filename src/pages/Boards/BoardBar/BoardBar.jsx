import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar1 from '~/assets/avatar1.jfif';
import Avatar2 from '~/assets/avatar2.jpg';
import Avatar3 from '~/assets/avatar3.jpg';
import Avatar4 from '~/assets/avatar4.jpg';
import Avatar5 from '~/assets/avatar5.jpg';
import { Menu } from '@mui/material';
import { useState } from 'react';

const MENU_STYLE = {
    color: 'primary.main',
    bgcolor: 'white',
    borderRadius: 1,
    px: '5px',
    '& .MuiSvgIcon-root': {
        color: 'primary.main',
    },
    '&:hover': {
        bgcolor: 'primary',
    },
    display: 'flex',
    justifyContent: 'start',
    gap: 1,
};

function BoadBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box
            px={2}
            sx={{
                width: '100%',
                height: (theme) => theme.trello.boardBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #3498db',
            }}
        >
            {/* Icon Menu Mobile */}
            <IconButton
                size="large"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ padding: 0, display: { xs: 'flex', md: 'none', color: 'primary.main' } }}
            >
                <MenuIcon />
            </IconButton>

            {/* Menu Desktop Left */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="Dashboard" clickable />
                <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label="Public" clickable />
                <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add To Goole Driver" clickable />
                <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation" clickable />
                <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filter" clickable />
            </Box>

            {/* Mobie Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="Dashboard" clickable />
                        <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label="Public" clickable />
                        <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add To Goole Driver" clickable />
                        <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation" clickable />
                        <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filter" clickable />
                    </Box>
                </Menu>
            </Box>

            {/* Menu Desktop Right */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    sx={{
                        color: 'primary.main',
                    }}
                    variant="outlined"
                    startIcon={<GroupAddIcon />}
                >
                    Invite
                </Button>
                <AvatarGroup
                    max={6}
                    total={10}
                    sx={{
                        '& .MuiAvatar-root': {
                            width: '34px',
                            height: '34px',
                            fontSize: '16px',
                        },
                    }}
                >
                    <Tooltip title="TranPhongDev">
                        <Avatar alt="TranPhongDev" src={Avatar4} />
                    </Tooltip>
                    <Tooltip title="TranPhongDev">
                        <Avatar alt="TranPhongDev" src={Avatar2} />
                    </Tooltip>
                    <Tooltip title="TranPhongDev">
                        <Avatar alt="TranPhongDev" src={Avatar5} />
                    </Tooltip>
                    <Tooltip title="TranPhongDev">
                        <Avatar alt="TranPhongDev" src={Avatar1} />
                    </Tooltip>
                    <Tooltip title="TranPhongDev">
                        <Avatar alt="TranPhongDev" src={Avatar3} />
                    </Tooltip>
                    <Tooltip title="TranPhongDev">
                        <Avatar alt="TranPhongDev" src={Avatar1} />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoadBar;
