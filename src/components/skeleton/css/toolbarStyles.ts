import { makeStyles, createStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { themeColor } from '../../../constants/theme';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const drawerWidth = 250;

const toolbarStyles = makeStyles(() =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: "grey"
        },
        appBarModified: {
            display: "block",
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            //marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchButton: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            //marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 1),
            height: '100%',
            color: "#adadad",
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            color: "#adadad",
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        badge: {
            backgroundColor: "red"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
            //overflow:"hidden",
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerMainContent: {
            height: "90%",
            overflowY: "scroll",
        },
        configIcon: {
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
            paddingTop: "8px",
        },
        avatarStyles: {
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
        },
        sectionBelowAvatar: {
            display: "flex",
            flexDirection: "column",
            paddingBottom: "15px",
            alignItems: "center",
        },
        divFooter: {
            height: "10%",
        },
        footerButton: {
            backgroundColor: "red"
        },
        bottomButton: {
            paddingTop: "20px",
            width: "90%",
            marginLeft: "5%",
        },
        hide: {
            display: "none",
        },
        button: {
            margin: theme.spacing(1),
        },
        titleHeader: {
            fontSize: '1rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '2.4rem',
            },
            color: themeColor
        }
    }),
);

export default toolbarStyles;
