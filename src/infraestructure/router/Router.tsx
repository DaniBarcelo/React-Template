import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppSkeleton from '../../components/skeleton/AppSkeleton'
import React from 'react';

import HomeView from '../../views/Home/HomeView';
import LoginView from '../../views/Login/LoginView';

interface IRouterProps {
    logged: boolean;
    currentLang: string;
}

export default function Router(routerProps: IRouterProps) {


    function homeView(props: any) { return <AppSkeleton component={<HomeView {...props} />} /> }
    function loginView(props: any) { return <AppSkeleton component={<LoginView {...props} />} /> }


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={homeView} {...routerProps} />
                <Route exact path='/login' component={loginView} {...routerProps} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
}