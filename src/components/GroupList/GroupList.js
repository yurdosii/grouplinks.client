import React, {Component} from 'react';

import GroupItem from '../GroupItem/GroupItem';
import './GroupList.scss';


class GroupList extends Component {

    renderItems = () => {
        let groups = this.props.groups.map(item =>
            <GroupItem item={item}
                       key={item.id}
                       onGroupOpenClick={this.props.onGroupOpenClick}
            />
        );
        return groups;
    }

    render() {
        return(
            <div className="groups">
                { this.renderItems() }
            </div>
        );
    }
}

export default  GroupList;
