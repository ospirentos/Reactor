import React, {Component} from 'react'
import Card from './card'
import '../index.css'

class Characters extends Component {
  constructor(props) {
    super(props);
    let cardList = []; 
    let card = { "title":"arcaneArcher", "img":"", "text":"hello" };
    cardList.push(card);
    let cardsToRender = [];

    for (const i of cardList) {
      cardsToRender.push(<Card type={i.title} img = {i.img} text = {i.text} />)
    }

  }
  
  render() {
    return(
      <div className="body">
        {this.cardsToRender}
      </div>
    );
  }
}

export default Characters;
