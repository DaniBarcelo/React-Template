import React from 'react';
import { observer } from "mobx-react";
import { Grid, Button, Typography, ListItem, ListItemIcon } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { themeColor } from '../../../constants/theme';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';

const GuestDrawer: React.FunctionComponent = () => {

    return (
        <>
            <ListItem button component={RouterLink} to="/">
                <ListItemIcon><HomeIcon style={{fill: themeColor}} /></ListItemIcon>
                <Typography variant="body2" color={themeColor}>Home</Typography>
            </ListItem>
            <ListItem button component={RouterLink} to="/login">
                <ListItemIcon><PersonIcon style={{fill: themeColor}} /></ListItemIcon>
                <Typography variant="body2" color={themeColor}>Login</Typography>
            </ListItem>
        </>
    );
}

export default observer(GuestDrawer);