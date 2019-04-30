
import React, {Component} from 'react'
import '../index.css'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      color: '#ffffff',
      cursor: 'default',
    }
  }

  handleMEnter = () => {
    this.setState({color: '#00ff99', cursor: 'pointer'})
  }

  handleMLeave = () => {
    console.log(window.location.href)
    this.setState({cursor: 'default'})
  }

  handleMClick = (e) => {
    console.log(e);
    this.setState({color: '#00ff99'})
  }

  render() {
    return(
      <div
        className="button"
        onClick={this.handleMClick}
        onMouseOut={this.handleMLeave}
        style={{color: this.state.color, cursor: this.state.cursor}}
      >
        {this.state.text}
        <div
          className="buttonLine"
          style={{background: this.state.color}}
        ></div>
      </div>
    );
  }
}

export default Button;
