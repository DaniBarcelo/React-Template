import { makeStyles } from '@mui/styles';

const skeletonStyles = makeStyles({
    topBar: {
        marginTop: 0,
        marginBottom: 0,
        width: "100%",
        /*minHeight: "75px",*/
        backgroundColor: "#B2BCBF",
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    footer: {
        marginTop: "auto",
        width: "100%",
        /*minHeight: "75px",*/
        backgroundColor: "#B2BCBF",
        paddingTop: "5px",
        paddingBottom: "5px",
        color: "white"
    },
    logo: {
        maxHeight: "65px",
    },
    verticalAlign: {
        margin: 0,
        position: "absolute",
        top: "50%",
        msTransform: "translate(-50%)",
        transform: "translate(-50%)"
    },
    inputText: {
        height:"1.5em",
        border:"0"
    }
});

export default skeletonStyles;