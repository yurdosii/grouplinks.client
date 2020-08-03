import React, {Component} from 'react';

import GroupItem from './GroupItem/GroupItem';
import classes from './GroupList.module.scss';


class GroupList extends Component {

    renderItems = () => {
        let groups = this.props.groups.map(item =>
            <GroupItem 
                item={item}
                key={item.id}
                onGroupOpenClick={this.props.onGroupOpenClick}
                getData={this.props.getData}
            />
        );
        return groups;
    }

    render() {
        return(
            <div className={classes.groups}>
                { this.renderItems() }
            </div>
        );
    }
}

export default  GroupList;
