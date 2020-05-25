import React, {Component} from 'react';

class AddNewItem extends Component {
    state = {
        value: ''
    };

    onChange(event) {
        this.setState({
            value: event.currentTarget.value
        });
    }

    onClick() {
        this.props.addItemHandler(this.state.value);

        // reset input data
        this.setState({
            value: ''
        });
    }

    render () {
        return (
            <div className="input-group mb-3">
                <input onChange={this.onChange.bind(this)} type="text" className="form-control" value={this.state.value} placeholder="Input a new note" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button onClick={this.onClick.bind(this)} className="btn btn-outline-secondary" type="button" id="button-addon2">Add new</button>
                </div>
            </div>
        );
    };
}

export default AddNewItem;