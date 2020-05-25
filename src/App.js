import React, {Component} from 'react';
import List from './List';
import AddNewItem from './AddNewItem';
import Counter from './Counter';

// TODO: use constants
const STATUS_ACTIVE = 1;
const STATUS_COMPETED = 2;

const Header = () => {
    return (
        <div className="row">
            <div className="col-sm">
                <h1>To Do List</h1>
            </div>
        </div>
    );
};

class App extends Component {
    state = {
        items: [
            // {
            //     value: 'First',
            //     status: 1
            // },
            // {
            //     value: 'First 2',
            //     status: 1
            // }
        ],
        counter: {
            active: 0,
            completed: 0,
        }
    };

    componentDidMount() {
        // TODO: get data from localstorage
    }

    addItemHandler(value) {
        const { counter } = this.state;
        const items = [...this.state.items, { value: value, status: 1 }];

        counter.active++;

        this.setState({
            items: items,
            counter: counter
        });
    }

    deleteAllHandler() {
        this.setState({
            items: [],
            counter: {
                active: 0,
                completed: 0,
            }
        });
    }

    onCompleteHandler(index) {
        console.log(this);
        const { counter } = this.state;
        const items = this.state.items;

        if (items[index].status == STATUS_ACTIVE) {
            items[index].status = STATUS_COMPETED;
            counter.completed++;
        } else {
            items[index].status = STATUS_ACTIVE;
            counter.completed--;
        }

        this.setState({
            items: items,
            counter: counter
        });
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <Counter counter={ this.state.counter } />

                <div className="row">
                    <div className="col-sm">
                        <List
                            items={ this.state.items }
                            onCompleteHandler={ this.onCompleteHandler.bind(this) }
                        />
                    </div>

                    <div className="col-sm">
                        <AddNewItem addItemHandler={this.addItemHandler.bind(this)} />
                    </div>
                </div>

                <button onClick={this.deleteAllHandler.bind(this)} type="button" className="btn btn-danger">Delete all</button>
            </div>
        );
    };
}

export default App;