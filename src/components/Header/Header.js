import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import {
    AppBar,
    Button,
    Toolbar
} from '@material-ui/core';


class Header extends Component {

    handleHomeClick = () => {
        this.props.history.push('/');
    };

    handleLoginClick = () => {
        this.props.history.push('/login/');
    };

    render() {

        return (
            <div>
                <AppBar className="navbar"
                    position="static">
                    <Toolbar className="navbar__toolbar">

                        <Button className="navbar__link"
                            onClick={this.handleHomeClick}>
                            Home
                        </Button>

                        <Button className="navbar__link"
                            onClick={this.handleLoginClick}>
                            Login
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(Header);