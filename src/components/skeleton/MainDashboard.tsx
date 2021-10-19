import { Container, Grid, Paper } from '@mui/material'
import skeletonStyles from './css/skeletonStyles'
import React from 'react';

export interface IMainDashboardProps {
    component?: any
}

export default function MainDashboard(props: IMainDashboardProps) {
    return <> 
        {!props.component ?
            <Grid container>
                <Grid item xs={3}>
                    welcome message
                </Grid>
            </Grid>
            :

            props.component
        }
    </>
}