import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() {
        const { items, onCompleteHandler } = this.props;

        let listItems = items.map((item, key) => {
            return <ListItem key={key} item={item} index={key}onCompleteHandler={ onCompleteHandler }/>;
        });

        if (!listItems.length) {
            listItems = <div className="alert alert-secondary" role="alert">List is empty</div>;
        }

        return (
            <ul className="list-group list-group-flush">
                { listItems }
            </ul>
        );
    };
}

export default List;