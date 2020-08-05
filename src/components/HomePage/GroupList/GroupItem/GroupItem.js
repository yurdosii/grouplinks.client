import React, { Component } from 'react';
import axios from 'axios';

import { API_URL, API_VERSION } from 'constants/index';
import classes from './GroupItem.module.scss';
import GroupItemCard from './GroupItemCard/GroupItemCard';
import GroupItemDialog from './GroupItemDialog/GroupItemDialog';


class GroupItem extends Component {
    state = {
        open: false,
        // group: {
        //     id: 0,
        //     name: '',
        //     description: '',
        //     links: [],
        // }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        // this.setState({group: this.props.item}, () => {console.log(this.state);})
        console.log(this.props.item);
        console.log('GROUPITEMMMMM');
    }

    render() {

        // if !this.state.links -> use this.props.linksNumber else this.state.links.length
        return (
            <div className={classes.group}>
                <GroupItemCard
                    handleClickOpen={this.handleClickOpen}
                    item={this.props.item}
                />
                <GroupItemDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    item={this.props.item}
                />
            </div>
        );
    }
}

export default GroupItem;
