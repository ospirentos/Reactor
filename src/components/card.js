import React, {Component} from 'react'
import '../index.css'
import background from '../static/cardBackground.png'
import { useSpring, animated } from 'react-spring'
/*
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      calc: (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1],
      trans: (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    }
  }
  
  componentDidMount() {
      [propsika, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  }

  render() {
    return(
      <div class="card">
        <div className="cardStructure" 
          style={{backgroundImage: `url(${background})`}}>
        </div>
        <animated.div
          class="test"
          onMouseMove={({ clientX: x, clientY: y }) => this.set({ xys: this.state.calc(x, y) })}
          onMouseLeave={() => this.set({ xys: [0, 0, 1] })}
          style={{ transform: this.propsika.xys.interpolate(this.state.trans)}}
        />
        <div className="cardImage" style={{backgroundImage: `url(${arcaneArcher})`}}></div>
        <div className="cardName">Arcane Archer</div>
        <div className="cardDescription">{this.state.data.text}</div>
      </div>
    );
  }
}
*/

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card(properties) {
  const image = require('../static/' + properties.data.img);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <div class="card">
        <animated.div
          class="cardStructure"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans), backgroundImage: `url(${background})` }}
        />
        <animated.div
          class="cardImage"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans), backgroundImage: `url(${image})` }}
        />
        <animated.div
          class="cardName"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
        {properties.data.title}
        </animated.div>
        <animated.div
          class="cardDescription"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
        {properties.data.text}
        </animated.div>
      </div>
  )
}

export default Card;
