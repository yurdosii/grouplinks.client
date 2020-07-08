import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class LinksListField extends Component {

    onChange = (event) => {
        const name = event.target.value.trim();
        const error = !this.isValid(name);

        this.props.setName(name, error);
    }

    renderLinks = () => {
        let links = this.props.links.map(item => 
            <Typography variant="body2" color="textSecondary" component="p">
                {item.url} - {item.description} - {item.isDone ? "Done":"Not done"}
            </Typography>
        );
        return links;
    }

    render() {
        return (
            <div className="links-list">
                <div className="links-list__title">
                    Links
                </div>
                <div className="links-list__links">
                    {this.renderLinks()}
                </div>
            </div>
        );
    }
}

export default LinksListField;
