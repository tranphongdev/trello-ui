import { useColorScheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="label-select-mode">Mode</InputLabel>
                <Select
                    labelId="label-select-mode"
                    id="demo-simple-select"
                    value={mode}
                    label="Mode"
                    onChange={handleChange}
                >
                    <MenuItem value="light">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LightModeIcon fontSize="small" /> Light
                        </Box>
                    </MenuItem>
                    <MenuItem value="dark">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <DarkModeOutlinedIcon fontSize="small" /> Dark
                        </Box>
                    </MenuItem>
                    <MenuItem value="system">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SettingsBrightnessIcon fontSize="small" /> System
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
}

function App() {
    return (
        <>
            <ModeSelect />
            <ModeToggle />
            <Button variant="contained">Hello world</Button>
        </>
    );
}

export default App;
