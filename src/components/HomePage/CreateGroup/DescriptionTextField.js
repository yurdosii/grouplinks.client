import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class DescriptionTextField extends Component {

    onChange = (event) => {
        const description = event.target.value.trim();
        this.props.setDescription(description);
    }

    render() {
        return (

            <TextField
                margin="dense"
                label="Description"
                type="text"
                multiline
                fullWidth
                value={this.props.description}
                onBlur={this.onChange}
            />

        );
    }
}

export default DescriptionTextField;
