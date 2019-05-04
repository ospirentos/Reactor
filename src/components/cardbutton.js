import '../index.css'
import React, {Component} from 'react'
import delButton from '../static/delButton.png'
import upButton from '../static/upButton.png'
import leftButton from '../static/leftButton.png'
import rightButton from '../static/rightButton.png'

class CardButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: '0',
            type: props.type,
            img: props.type === '1' ? delButton : 
                 props.type === '2' ? upButton : 
                 props.type === '3' ? leftButton : rightButton
        }
    }

    componentWillReceiveProps(props) {
        this.setState((state, props) => ({
            opacity: props.visibility === 'visible' ? '1' : '0'
        }));
    }

    handleClick = () => {
        if (this.state.type === '1') {
            console.log("type 1");
        } else if (this.state.type === '2') {
            console.log("type 2");
        } else if (this.state.type === '3') {
            console.log("type 3");
        } else {
            console.log("type 4");
        }
    }

    render() {
        return(
            <div 
                className="cardButton"
                style={{opacity: this.state.opacity, backgroundImage: `url(${this.state.img})`}}
                onClick={this.handleClick}
            >
            </div>
        );
    }
}

export default CardButton;