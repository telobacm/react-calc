import React, { Component } from 'react'

export default class InputButtons extends Component {
	render() {
		return (
			<div className= "button">
				<button name="7" onClick={pip => this.props.click (pip.target.name)}>7</button>
				<button name="8" onClick={pip => this.props.click (pip.target.name)}>8</button>
				<button name="9" onClick={pip => this.props.click (pip.target.name)}>9</button><br/>
				<button name="4" onClick={pip => this.props.click (pip.target.name)}>4</button>
				<button name="5" onClick={pip => this.props.click (pip.target.name)}>5</button>
				<button name="6" onClick={pip => this.props.click (pip.target.name)}>6</button><br/>
				<button name="1" onClick={pip => this.props.click (pip.target.name)}>1</button>
				<button name="2" onClick={pip => this.props.click (pip.target.name)}>2</button>
				<button name="3" onClick={pip => this.props.click (pip.target.name)}>3</button><br/>
				<button name="0" onClick={pip => this.props.click (pip.target.name)}>0</button>
				<button name="+" onClick={pip => this.props.click (pip.target.name)}>+</button>
				<button name="=" onClick={pip => this.props.click (pip.target.name)}>=</button>
			</div>
		)
	}
}
