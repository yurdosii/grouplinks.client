import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import classes from './DescriptionTextField.module.scss';


class DescriptionTextField extends Component {

    onChange = (event) => {
        const description = event.target.value;
        this.props.setDescription(description);
    }

    render() {
        return (
            <TextField
                margin="dense"
                label="Description"
                name="description"
                type="text"
                multiline
                fullWidth
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

export default DescriptionTextField;
