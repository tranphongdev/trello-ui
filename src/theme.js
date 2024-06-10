import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
    trello: {
        appBarHeight: '58px',
        boardBarHeight: '60px',
    },
    colorSchemes: {
        light: {},
        dark: {},
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '7px',
                        height: '7px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dcdde1',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'white',
                    },
                    '*::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        fontSize: '0.875rem',
                        color: theme.palette.primary.main,
                    };
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    '& fieldset': { borderWidth: '0.5px !important' },
                    '&:hover fieldset': { borderWidth: '2px !important' },
                    '&.Mui-focused fieldset': { borderWidth: '2px !important' },
                },
            },
        },
    },
});

export default theme;
