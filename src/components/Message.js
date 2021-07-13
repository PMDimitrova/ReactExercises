import {Component} from "react";
import './Message.css';

class Message extends Component{
    constructor(props) {
        super(props);

        console.log('constructor');

        this.state = {
            company: 'Me, myself and I'
        }
    }

    componentDidMount() {
        console.log('component mounted')
    }

    render() {
        //inline css
        // let style ={
        //     backgroundColor: 'pink',
        //     fontSize: 44,
        //
        // }
        //
        // if(true){
        //     style.textDecoration = 'underline'
        // }

        // Dynamic classes
        // let classes = ['default-class'];
        //
        // if (true){
        //     classes.push('selected-book ');
        // }

        console.log('render');
        return <span className={'footer-message'}>{this.props.text} | {this.state.company}</span>
        // return <span className={classes.join(' ')}>{this.props.text} | {this.state.company}</span>
        // return <span style={style}>{this.props.text} | {this.state.company}</span>
    }

}

export default Message;