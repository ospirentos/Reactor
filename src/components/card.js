import React, {Component} from 'react'
import '../index.css'
import arcaneArcher from '../static/arcaneArcher.png'
import background from '../static/cardBackground.png'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  render() {
    return(
      <div className="card">
        <div className="cardStructure" style={{backgroundImage: `url(${background})`}}></div>
        <img className="cardImage" src={arcaneArcher} />
        <div className="cardName">Arcane Archer</div>
        <div className="cardDescription">One of the most famous archers in Tolosis</div>
      </div>
    );
  }
}

export default Card;
