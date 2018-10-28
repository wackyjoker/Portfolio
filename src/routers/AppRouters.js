import React from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';
import Section1 from '../components/Section1';

const AppRouter=()=>(
    <BrowserRouter>
    <div id="router">
    <Header />
    <Section1 />
    <Switch>
    <Route path="/" component={ExpanseDashboardPage} exact={true}/>
    </Switch>
    </div>
    </BrowserRouter>
);


export default AppRouter;




