import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import "./index.css"
import NavBar from './components/navbar'
import Body from './components/body'

class Route extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route path="/characters" component={Body} />
      </Router>
    )
  }
}

ReactDOM.render(<div><PageRouter /></div>, document.getElementById('root'));
