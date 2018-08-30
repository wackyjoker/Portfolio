import React from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';

const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpanseDashboardPage} exact={true}/>
    </Switch>
    </div>

    </BrowserRouter>
);


export default AppRouter;




