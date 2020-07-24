import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import classes from './NameTextFiels.module.scss';


class NameTextField extends Component {

    onChange = (event) => {
        const name = event.target.value;
        const error = !this.isValid(name);

        this.props.setName(name, error);
    }

    isValid = (name) => {
        let valid = true;

        if (!name || name.length > 150) {
            valid = false;
        }

        return valid;
    }

    render() {
        return (
            <TextField
                autoFocus={!Boolean(this.props.value)}
                fullWidth
                required
                margin="dense"
                label="Name"
                type="text"
                error={this.props.error}
                value={this.props.value}
                onChange={this.onChange}
                InputProps={{
                    className: classes.input
                }}
                InputLabelProps={{
                    classes: {
                        focused: classes.label__focused
                    }
                }}
            />
        );
    }
}

export default NameTextField;
