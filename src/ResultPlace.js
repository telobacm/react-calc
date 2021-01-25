import React, { Component } from 'react'

export default class ResultPlace extends Component {
	render() {
		return (
			<div>
				<p>Hasil: {this.props.hasil}</p>
			</div>
		)
	}
}
