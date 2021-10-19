import { Grid, Container } from '@mui/material';
import { useHistory } from "react-router-dom";
import { useCallback, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import SessionStorage from '../../data/model/sessionStorage/SessionStorage';



function HomeView() {
    const history = useHistory();
    const { t } = useTranslation();


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
            <p>Hola login view!</p>
        </div>
    );
}

export default HomeView;