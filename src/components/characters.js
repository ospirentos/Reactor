import React, {Component} from 'react'
import Card from './card'
import '../index.css'

class Characters extends Component {
  constructor(props) {
    super(props);
    let card = [
      { 
        "title":"Arcane Archer", 
        "img":"cardImage1.png", 
        "text":"An archer mixed dexterity with some magic."},
      { 
        "title":"John Ice", 
        "img":"cardImage2.png", 
        "text":"Brave warrior of the North"},
      { 
      "title":"Freya", 
      "img":"cardImage3.png", 
      "text":"Good swordmaster with long hair."},
      { 
        "title":"Defender", 
        "img":"cardImage4.png", 
        "text":"Strongest defender of Ozligiyat"},
      { 
        "title":"Azina", 
        "img":"cardImage5.png", 
        "text":"Strong magician of the North"}
    ];
    this.state = {
      data: card
    }

    console.log(card.text);
  }
  
  render() {
    return (
      <div className="body">
        {this.state.data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    );
  }
}

export default Characters;
