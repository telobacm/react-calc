import React, { Component } from 'react'
import './InputButton.css';

export default class InputButtons extends Component {
	render() {
		return (
			<div className= "button">
				<button name="7" onClick={pip => this.props.click (pip.target.name)}className="ripple">7</button>
				<button name="8" onClick={pip => this.props.click (pip.target.name)}className="ripple">8</button>
				<button name="9" onClick={pip => this.props.click (pip.target.name)}className="ripple">9</button><br/>
				<button name="4" onClick={pip => this.props.click (pip.target.name)}className="ripple">4</button>
				<button name="5" onClick={pip => this.props.click (pip.target.name)}className="ripple">5</button>
				<button name="6" onClick={pip => this.props.click (pip.target.name)}className="ripple">6</button><br/>
				<button name="1" onClick={pip => this.props.click (pip.target.name)}className="ripple">1</button>
				<button name="2" onClick={pip => this.props.click (pip.target.name)}className="ripple">2</button>
				<button name="3" onClick={pip => this.props.click (pip.target.name)}className="ripple">3</button><br/>
				<button name="0" onClick={pip => this.props.click (pip.target.name)}className="ripple">0</button>
				<button name="+" onClick={pip => this.props.click (pip.target.name)}className="ripple">+</button>
				<button name="=" onClick={pip => this.props.click (pip.target.name)}className="ripple">=</button>
			</div>
		)
	}
}
