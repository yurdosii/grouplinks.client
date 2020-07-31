import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class LogoutButton extends Component {

    render() {
        return (
            <Button
                variant="outlined"
                color="primary"
                onClick={this.props.onLogoutClick}
            >
                Logout
            </Button>
        );
    }
}

export default LogoutButton;
