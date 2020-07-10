import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import classes from './CheckboxDisabledField.module.scss';


class CheckboxDisabledField extends Component {

    render() {
        return (
            <FormControlLabel
                control={
                    <Checkbox checked={this.props.checked} disabled />
                }
                label={this.props.label}
                className={classes.checkbox}
            />
        );
    }
}

export default CheckboxDisabledField;
