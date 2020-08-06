import React, { Component } from 'react';
import axios from 'axios';

import { API_URL, API_VERSION } from 'constants/index';
import classes from './GroupItem.module.scss';
import GroupItemCard from './GroupItemCard/GroupItemCard';
import GroupItemDialog from './GroupItemDialog/GroupItemDialog';


class GroupItem extends Component {
    state = {
        open: false,
        links: [],
        linksLength: 0
    }

    getLinksData = () => {
        axios.get(`${API_URL}/${API_VERSION}/groups/${this.props.item.id}/links`, {
            withCredentials: true,
        }).then(res => {
            console.log(res);
            const links = res.data;
            this.setState({ links: links, linksLength: links.length })
        }).catch(error => {
            console.log(error);
        })
    }

    handleClickOpen = () => {
        if (!this.state.links.length && this.props.item.linksLength) {
            this.getLinksData();
        }

        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.setState({ linksLength: this.props.item.linksLength })
        console.log('GROUPITEMMMMM');
    }

    render() {
        return (
            <div className={classes.group}>
                <GroupItemCard
                    handleClickOpen={this.handleClickOpen}
                    item={this.props.item}
                    linksLength={this.state.linksLength}
                />
                <GroupItemDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    item={this.props.item}
                    links={this.state.links}
                    getData={this.props.getData}
                    getLinksData={this.getLinksData}
                />
            </div>
        );
    }
}

export default GroupItem;
