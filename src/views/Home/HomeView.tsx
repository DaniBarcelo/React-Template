import { Grid, Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import { useCallback, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import HomeStyles from './HomeStyles';
import SessionStorage from '../../data/model/sessionStorage/SessionStorage';
import SliderImage1 from "../../assets/images/maxresdefault.jpg";
import SliderImage2 from "../../assets/images/maxresdefault - copia.jpg";
import Coronavirus from "../../assets/images/coronavirus.png";
import Movil from "../../assets/images/telefono-inteligente.png";
import Cubiertos from "../../assets/images/cubiertos-de-plata.png";
import Tarjeta from "../../assets/images/tarjeta-mastercard.png";
import MobileMenu from "../../assets/images/carta-movil.png";

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/system';



function HomeView() {
    const history = useHistory();
    const { t } = useTranslation();
    const classes = HomeStyles();


    const checkLoggedIn = useCallback(async () => {
        /*console.log("Idioma: ")
        console.log(i18n.language)
        if (SessionStorage.isLoggedIn() && SessionStorage.getRole()==="OPERARIO") {
            window.scrollTo(0, 0);
            history.push('/scanner')
        }
        else if (SessionStorage.isLoggedIn() && SessionStorage.getRole()==="ADMIN") {
            window.scrollTo(0, 0);
            history.push('/userTable')
        }
        else if (SessionStorage.isLoggedIn() && SessionStorage.getRole()!=="ADMIN" && SessionStorage.getRole()!=="OPERARIO") {
            window.scrollTo(0, 0);
            SessionStorage.setRole("")
            SessionStorage.setToken("")
            history.push('/')
        }*/
    }, []);

    useEffect(() => {
        checkLoggedIn()
    }, [checkLoggedIn]);

    return (
        <div>
            <p>
                Home view!
            </p>
        </div>
    );
}

export default HomeView;