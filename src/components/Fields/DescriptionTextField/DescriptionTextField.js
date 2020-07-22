import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


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
            />
        );
    }
}

export default DescriptionTextField;
