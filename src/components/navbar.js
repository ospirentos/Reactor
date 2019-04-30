import React, {Component} from 'react'
import '../index.css'
import logo from '../static/logo.png';
import Button from './button'

class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <a href="/">
          <img className="logo" src={logo} alt="logo" height="40"/>
        </a>
        <div className="buttons">
          <a href="/characters"><Button text="Characters"/></a>
          <a href="/places"><Button text="Places"/></a>
          <a href="/spells"><Button text="Spells"/></a>
          <a href="/about"><Button text="About"/></a>
        </div>
      </div>
    );
  }
}

export default NavBar;
