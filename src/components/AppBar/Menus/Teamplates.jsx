import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';

function Teamplates() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Button
                sx={{
                    px: { xs: '14px', lg: '8px' },
                    color: { xs: 'primary.main', lg: 'white' },
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                id="basic-button-teamplates"
                aria-controls={open ? 'basic-menu-teamplates' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Teamplates
            </Button>
            <Menu
                id="basic-menu-teamplates"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button-teamplates',
                }}
            >
                <MenuItem>
                    <ListItemText inset>Single</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText inset>1.15</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText inset>Double</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Check />
                    </ListItemIcon>
                    Custom: 1.2
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Add space before paragraph</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Add space after paragraph</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Custom spacing...</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Teamplates;
