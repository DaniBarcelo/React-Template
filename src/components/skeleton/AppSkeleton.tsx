import Toolbar from './ToolbarApp';
import MainDashboard from './MainDashboard';
import { makeStyles } from '@mui/styles';
import Footer from './Footer';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
});

export interface IAppSkeletonProps {
    component?: any
}

export default function AppSkeleton(props: IAppSkeletonProps) {
    const classes = useStyles();

    return <>
        <div className={classes.root}>
            <div style={{ display: "block" }}>
                <Toolbar />
                <div style={{ marginTop: "13vh", minHeight: window.innerHeight * 0.80 + 1 }}>
                    <MainDashboard component={props.component} {...props} />
                </div>
                <Footer />
            </div>
        </div>
    </>
}