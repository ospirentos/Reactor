import React, {Component} from 'react'
import Card from './card'
import '../index.css'

class Characters extends Component {
  constructor(props) {
    super(props);
    let card = [
      { 
      "title":"arcaneArcher", 
      "img":"", 
      "text":"One of the most famous archers in Tolosis"},
      { 
        "title":"arcaneArcher", 
        "img":"", 
        "text":"One of the most famous archers in Tolosis"},
      { 
      "title":"arcaneArcher", 
      "img":"", 
      "text":"One of the most famous archers in Tolosis"},
      { 
        "title":"arcaneArcher", 
        "img":"", 
        "text":"One of the most famous archers in Tolosis"},
      { 
      "title":"arcaneArcher", 
      "img":"", 
      "text":"One of the most famous archers in Tolosis"}
    ];
    this.state = {
      data: card
    }

    console.log(card.text);
  }
  
  render() {
    return
      <div className="body">
        {this.state.data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    );
  }
}

export default Characters;
