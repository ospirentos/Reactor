import React, {Component} from 'react'
import './index.css'
import symbol1 from './symbol.png'
import symbol2 from './symbol2.png'
import symbol3 from './symbol3.png'
import picture1 from './picture1.png'
import picture2 from './picture2.png'
import picture3 from './picture3.png'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }

    if (props.type === '1') {
      this.state = {
        type: symbol1,
        picture: picture1,
        text: 'CAT'
      }
    }
    else if (props.type === '2') {
      this.state = {
        type: symbol2,
        picture: picture2,
        text: 'DOG'
      }
    }
    else {
      this.state = {
        type: symbol3,
        picture: picture3,
        text: 'DINO'
      }
    }
  }

  handleClick = () => {
    fetch('http://192.168.1.100:80/getdata/json')
      .then(response => response.json())
      .then(data => this.setState({data}));
    console.log(this.state.data);
  }

  render() {
    return(
      <div className="card" onClick={this.handleClick}>
        <img className="cardSymbol" src={this.state.type}/>
        <img className="cardImg" src={this.state.picture}/>
        <div className="cardText">{this.state.text}</div>
      </div>
    );
  }
}

export default Card;
