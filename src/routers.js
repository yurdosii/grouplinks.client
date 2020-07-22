import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';


class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login"
                        component={LoginPage} />

                    <Route path="/"
                        component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routers;
