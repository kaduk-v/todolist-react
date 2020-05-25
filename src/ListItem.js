import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        const { item, index, onCompleteHandler } = this.props;
        let text = item.value;

        if (item.status == 2) {
            text = <del>{ item.value }</del>;
        }

        return (
            <li className="list-group-item">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input onClick={() => onCompleteHandler(index)} type="checkbox" />
                        </div>
                    </div>
                    
                    <p className="form-control">{ text }</p>
                </div>
            </li>
        );
    };
    
}

export default ListItem;