import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class NameTextField extends Component {

    onChange = (event) => {
        const name = event.target.value.trim();
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
            />
        );
    }
}

export default NameTextField;
