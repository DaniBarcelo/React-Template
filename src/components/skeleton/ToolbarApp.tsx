import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import clsx from "clsx";
import { observer } from "mobx-react";
import { Grid, Typography } from '@mui/material';
import toolbarStyles from './css/toolbarStyles';
import Logo from "../../assets/images/defaultLogo.png";
import { themeColor } from '../../constants/theme';
import SessionStorage from '../../data/model/sessionStorage/SessionStorage';
import GuestNavBar from './GuestNavBar';
import CustomDrawer from './drawer/CustomDrawer';



const ToolbarApp: React.FunctionComponent = (props: any) => {

    const classes = toolbarStyles();
    const { t } = useTranslation();
    const history = useHistory();
    const [open, setOpen] = useState(false);


    const handleLogin = () => {
        window.scrollTo(0, 0);
        history.push("/login")
    };

    const handleLogout = () => {
        window.scrollTo(0, 0);
        //localStorage.removeItem('loggedIn')
        SessionStorage.setRole("")
        SessionStorage.setToken("")
        history.push("/")
    };



    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            className={classes.grow}
        >
            <AppBar
                style={{ backgroundColor: "white", height: "7vh", maxHeight: "5vw", minHeight: "7vh" }}
                //position="static">
                position="fixed"
                //classes={{root: classes.appBarModified}}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between">
                        <Grid item xs={2} sx={{ display: { lg: 'none', xs: 'block' } }}>
                            <CustomDrawer classes={classes} />
                        </Grid>
                        <Grid item xs={3} lg={2}>
                            <img src={Logo} onClick={() => history.push("/")} style={{ display: "contain", width: "auto", height: "12vw", maxHeight: "7vh" }} />
                        </Grid>
                        <Grid item sx={{ display: { lg: 'block', xs: 'none' } }}>
                            {!SessionStorage.isLoggedIn() && <GuestNavBar />}
                        </Grid>
                        <Grid item xs={2} lg={2}>
                            {SessionStorage.isLoggedIn() ?
                                <ExitToAppIcon onClick={() => handleLogout()} style={{ color: themeColor, fontSize: "8vw", maxHeight: "6vh" }} />
                                :
                                <AccountCircleIcon onClick={() => handleLogin()} style={{ color: themeColor, fontSize: "8vw", maxHeight: "6vh" }} />
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default observer(ToolbarApp);