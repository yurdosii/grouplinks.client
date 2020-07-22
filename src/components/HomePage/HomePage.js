import React, { Component } from 'react';
import axios from 'axios';
import GroupList from './GroupList/GroupList';
import CreateGroupButton from './CreateGroup/CreateGroupButton';

import { API_URL, API_VERSION } from 'constants/index';
import './HomePage.scss';


class HomePage extends Component {
    state = {
        groups: []
    }

    getData = () => {
        axios.get(`${API_URL}/${API_VERSION}/groups/`, {
            // withCredentials: true,
        }).then(res => {
            console.log(res);
            const groups = res.data;
            this.setState({ groups })
        }).catch(error => {
            console.log(error);
        })
    }

    handleGroupOpenClick = (group_id) => {
        this.props.history.push(`/groups/${group_id}`)
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        // console.log(this.state);
        return (
            <div className="content">
                <div className="content__title">
                    Your groups
                </div>

                <CreateGroupButton getData={this.getData} />

                <GroupList groups={this.state.groups}
                    onGroupOpenClick={this.handleGroupOpenClick}
                />
            </div>
        );
    }
}

export default HomePage;
