import React from 'react'
import "./index.css"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Characters from './characters'
import NavBar from './components/navbar'

class Routeri extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/characters" component={Characters} />
        <Route path="/" component={NavBar} />
      </Router>
    )
  }
}

export default Routeri;
