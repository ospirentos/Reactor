import React, {Component} from 'react'
import './index.css'
import logo from './logo.png';
import Button from './Button'

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" height="40"/>
        <div className="buttons">
          <Button text="Code"/>
          <Button text="Music"/>
          <Button text="Drawing"/>
          <Button text="Writing"/>
        </div>
      </div>
    );
  }
}

export default NavBar;
