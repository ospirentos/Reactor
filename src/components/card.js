import React, {Component} from 'react'
import '../index.css'
import symbol1 from '../static/symbol.png'
import symbol2 from '../static/symbol2.png'
import symbol3 from '../static/symbol3.png'
import picture1 from '../static/picture1.png'
import picture2 from '../static/picture2.png'
import picture3 from '../static/picture3.png'

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

  render() {
    return(
      <div className="card">
        <img className="cardSymbol" src={this.state.type} alt="sym"/>
        <img className="cardImg" src={this.state.picture} alt="cardImg"/>
        <div className="cardText">{this.state.text}</div>
      </div>
    );
  }
}

export default Card;
