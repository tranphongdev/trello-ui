import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';

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
};

function BoadBar() {
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="Dashboard" clickable />
                <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label="Public" clickable />
                <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add To Goole Driver" clickable />
                <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation" clickable />
                <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filter" clickable />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoadBar;
