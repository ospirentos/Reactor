import React, {Component} from 'react'
import Card from './card'
import '../index.css'

class Characters extends Component {
  render() {
    return(
      <div className="body">
        <Card type="1"/>
        <Card type="1"/>
        <Card type="2"/>
        <Card type="3"/>
        <Card type="2"/>
        <Card type="3"/>
        <Card type="2"/>
        <Card type="2"/>
        <Card type="2"/>
        <Card type="2"/>
        <Card type="2"/>
        <Card type="2"/>
      </div>
    );
  }
}

export default Characters;
