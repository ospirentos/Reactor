import React from 'react'
import NavBar from './components/navbar'
import Body from'./components/body'
import "./index.css"

class Character extends React.Component {
  render() {
    return (
        <div><NavBar /><Body /></div>
    );
  }
}

export default Character;
