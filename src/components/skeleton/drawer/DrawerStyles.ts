import { makeStyles } from "@material-ui/core";
import { themeColor } from "../../../constants/theme";

const DrawerStyles = makeStyles((theme) => ({
    sectionTitle: {
        backgroundColor: themeColor,
        color:"white",
        display: "flex",
        justifyContent: "center",
    },
    menuButton:{
        color:themeColor,
        display:"inherit"
    }
}));

export default DrawerStyles;