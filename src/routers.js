import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import GroupItemOpen from './components/GroupItem/GroupItemOpen';

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/login"
                        component={LoginPage} />

                    <Route path='/groups/:id'
                        component={GroupItemOpen}
                    />

                    <Route path="/"
                        component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routers;
