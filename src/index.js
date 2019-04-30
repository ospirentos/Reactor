import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import "./index.css"
import NavBar from './components/navbar'
import Characters from './components/characters'
import Places from './components/places'
import Spells from './components/spells'
import About from './components/about'

class PageRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Route path="/characters" component={Characters} />
        <Route path="/places" component={Places} />
        <Route path="/spells" component={Spells} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<div><PageRouter /></div>, document.getElementById('root'));
