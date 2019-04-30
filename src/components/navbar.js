import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, {Component} from 'react'
import '../index.css'
import logo from '../static/logo.png';
import Button from './button'
import Characters from '../characters'

class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" height="40"/>
        <div className="buttons">
          <Router>
            <Route path="/characters" component={Characters} />
          </Router>
          <a href="/characters"><Button text="Characters"/></a>
          <Button text="Places"/>
          <Button text="Spells"/>
          <Button text="About"/>
        </div>
      </div>
    );
  }
}

export default NavBar;
