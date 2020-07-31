import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { GOOGLE_AUTH_URL, MAIN_PAGE_URL } from 'constants/index';


class LoginButton extends Component {

    onClick = () => {
        window.location.href = `${GOOGLE_AUTH_URL}?main_page_url=${MAIN_PAGE_URL}`
    }

    render() {
        return (
            <Button
                variant="outlined"
                color="primary"
                onClick={this.onClick}
            >
                Login
            </Button>
        );
    }
}

export default LoginButton;
