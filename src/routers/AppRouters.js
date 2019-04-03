import React from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Header from '../components/Header';
import Section2 from '../components/Section2';
import Section1 from '../components/Section1';
import Footer from '../components/Footer';

const AppRouter=()=>(
    <BrowserRouter>
    <div id="router">
    <Header />
    <Section1 />
    <Switch>
    <Route path="/" component={Section2} exact={true}/>
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
);


export default AppRouter;




