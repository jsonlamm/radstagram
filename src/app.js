// dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles

// components


class Main extends Component {
	constructor(props) {
		super(props)

		// BINDING

		// STATE
		this.state = {

		}
	}

	// FUNCTIONS AS PROPS

	render() {
		return (
			<div>
				<p> Hey2 and {this.props.options[2]} </p>
			</div>
		);
	}
}

Main.defaultProps = {
	options: ['hello', 'hola', 'guten tag']
}

ReactDOM.render(<Main />, document.getElementById('app'))

export default Main;
