import React, {Component} from 'react'
import '../index.css'
import background from '../static/cardBackground1.png'
import CardButton from './cardbutton'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      img: require('../static/' + props.data.img),
      borderColor: 'black',
      isSelected: false,
      cardButtons: 'hidden'
    }
  }

  handleMouseEnter = () => {
    if (!this.state.isSelected) {
      this.setState({
        borderColor: '#660000'
      })
    }
    
  }

  handleMouseLeave = () => {
    if (!this.state.isSelected) {
      this.setState({
        borderColor: 'black'
      })
    }
  }

  handleMouseClick = () => {
      this.setState((state) => ({
        borderColor: state.isSelected ? 'black' : 'red',
        isSelected: !state.isSelected,
        cardButtons: state.isSelected ? 'hidden' : 'visible'
      }));
    }

  render() {
    return(
      <div 
        className="card" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleMouseClick}
      >
        <div className="cardStructure" 
          style={{backgroundImage: `url(${background})`, border: '5px solid ' + this.state.borderColor}}>
        </div>
        <div className="cardImage" style={{backgroundImage: `url(${this.state.img})`}}></div>
        <div className="cardName">{this.state.data.title}</div>
        <div className="cardDescription">{this.state.data.text}</div>
        <div className="cardButtonContainer">
          <CardButton visibility={this.state.cardButtons} type='1'/> 
          <CardButton visibility={this.state.cardButtons} type='2'/>
          <CardButton visibility={this.state.cardButtons} type='3'/>
          <CardButton visibility={this.state.cardButtons} type='4'/>
        </div>
      </div>
    );
  }
}

export default Card;
