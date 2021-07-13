import {Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 11,
            collectionName: 'My books'
        }
    }

    decrementCounter(e){
        this.setState(prevState => ({count: prevState.count - 1}));
    }

    incrementCounter(e){
        // e is the event obj
        this.setState(prevState => ({count: prevState.count +1}));
    }

    render() {
        return(
            <div className={"counter"}>
                <h3>{this.state.collectionName} Counter</h3>
                {/*<button onClick={(e) => this.setState((oldState) =>({count: oldState.count + 1}))}> + </button>*/}
                <button onClick={this.incrementCounter.bind(this)}> + </button>
                <span>{this.state.count}</span>
                {/*<button onClick={(e) => this.setState({count: this.state.count - 1})}> - </button>*/}
                <button onClick={(e) => this.decrementCounter()}> - </button>
            </div>
        );
    }
}

export default Counter;