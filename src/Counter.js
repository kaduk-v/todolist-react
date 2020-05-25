import React, {Component} from 'react';

class Counter extends Component {
    render () {
        const { counter } = this.props;

        return (
            <div className="row">
                <div className="col-sm">
                    <p>Completed <span className="badge badge-success">{ counter.completed }</span> of <span className="badge badge-secondary">{ counter.active }</span></p>
                </div>
            </div>
        );
    };
}

export default Counter;