import React, { Component } from 'react';

import classes from './LinkList.module.scss';
import LinkItem from './LinkItem/LinkItem';


class LinkList extends Component {

    renderLinks = () => {
        const links = this.props.links.map(link =>
            <LinkItem 
                key={link.id}
                link={link}
                deleteLink={this.props.deleteLink}
            />
        );
        return links;
    }

    componentDidMount() {
        console.log('GROUPITEMMMMM - LinkList');
    }

    render() {
        return(
            <div className={classes.links}>
                { this.renderLinks() }
            </div>
        );
    }
}

export default LinkList;
