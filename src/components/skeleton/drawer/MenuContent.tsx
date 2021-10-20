import DrawerStyles from './DrawerStyles';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import SessionStorage from '../../../data/model/sessionStorage/SessionStorage';
import GuestDrawer from './GuestDrawer';
import { themeColor } from '../../../constants/theme';
import CloseIcon from '@mui/icons-material/Close';



const MenuContent=(props:any)=>{
    const classes = DrawerStyles();
    const { t } = useTranslation();

    return (
        <List>
            <ListItem button onClick={() => props.onClose()}>
                <ListItemIcon><CloseIcon style={{fill: themeColor}} /></ListItemIcon>
            </ListItem>           
            {!SessionStorage.isLoggedIn() && <GuestDrawer />}
        </List>
    )
}


export default MenuContent;