import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';

const theme = extendTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContenteight: BOARD_CONTENT_HEIGHT,
        columnHeaderHeight: COLUMN_HEADER_HEIGHT,
        columnFooterHeight: COLUMN_FOOTER_HEIGHT,
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-body1': { fontSize: '0.875rem' },
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
