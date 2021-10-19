import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { observer } from "mobx-react";
import { Container, Grid, Typography } from '@mui/material';
import Logo from "../../assets/images/defaultLogo.png";



const Footer: React.FunctionComponent = (props: any) => {

    const { t } = useTranslation();
    const history = useHistory();



    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="md">
                <Toolbar>
                    <Grid container alignContent="center" justifyContent="center">
                        <Typography variant="body1" color="white" fontWeight="bold" textAlign="center">
                            © 2021 Template name
                        </Typography>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default observer(Footer);