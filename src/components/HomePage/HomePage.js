import React, { Component } from 'react';
import axios from 'axios';
import GroupList from './GroupList/GroupList';
import CreateGroup from './CreateGroup/CreateGroup';

import { API_URL, API_VERSION, SERVER_HOST } from 'constants/index';
import classes from './HomePage.module.scss';
import LoginButton from './Auth/LoginButton/LoginButton';
import LogoutButton from './Auth/LogoutButton/LogoutButton';


class HomePage extends Component {
    state = {
        login: false,
        groups: []
    }

    checkLogin = () => {
        axios.get(`${SERVER_HOST}/check_login/`, {
            withCredentials: true,
        }).then(res => {
            console.log(res);
            this.setState({login: res.data.login});
        }).catch(error => {
            console.log(error);
            // this.setState({login: false});
        })
    }

    getData = () => {
        axios.get(`${API_URL}/${API_VERSION}/groups/`, {
            withCredentials: true,
        }).then(res => {
            console.log(res);
            const groups = res.data;
            this.setState({ groups })
        }).catch(error => {
            console.log(error);
        });
    }

    onLogoutClick = () => {
        axios.get(`${SERVER_HOST}/auth/logout`, {
            withCredentials: true,
        }).then(res => {
            console.log(res);
            this.setState({login: false, groups: []});
        }).catch(error => {
            console.log(error);
        })
    }

    handleGroupOpenClick = (group_id) => {
        this.props.history.push(`/groups/${group_id}`)
    }

    renderAuthButton = () => {
        let button = null;

        if (this.state.login) {
            button = <LogoutButton onLogoutClick={this.onLogoutClick} />
        } else {
            button = <LoginButton />
        }

        return button;
    }

    componentDidMount() {
        this.checkLogin();
        this.getData();
    }

    render() {
        // console.log(this.state);
        return (
            <div className={classes.content}>

                {this.renderAuthButton()}

                <CreateGroup
                    getData={this.getData}
                />

                <div className={classes.title}>
                    Your groups
                </div>

                <GroupList
                    groups={this.state.groups}
                    onGroupOpenClick={this.handleGroupOpenClick}
                    getData={this.getData}
                />
            </div>
        );
    }
}

export default HomePage;
