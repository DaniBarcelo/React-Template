import React from 'react';
import { observer } from "mobx-react";
import { Grid, Button, Typography } from '@mui/material';
import { themeColor } from '../../constants/theme';
import { Link as RouterLink } from 'react-router-dom';

const GuestNavBar: React.FunctionComponent = () => {

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <Grid px={2}>
                <Button component={RouterLink} to="/" color="primary" variant="outlined">
                    <Typography variant="body2" color={themeColor}>Home</Typography>
                </Button>
            </Grid>
            <Grid px={2}>
                <Button component={RouterLink} to="/login" color="primary" variant="contained">
                    <Typography variant="body2" color="white">Login</Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default observer(GuestNavBar);