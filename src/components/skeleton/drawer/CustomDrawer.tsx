import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuContent from './MenuContent';
import DrawerStyles from './DrawerStyles';
import { Box } from '@mui/material';



const CustomDrawer = (props: any) => {
    const classes = DrawerStyles();

    const [open, setOpen] = React.useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Box sx={{ display: { lg: 'none', xs: 'block' } }} >
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} anchor={"top"} onClose={() => handleClose()}>
                    <div>
                        <MenuContent onClose={handleClose}/>
                    </div>
                </Drawer>
            </Box>
        </>
    )
}


export default CustomDrawer;