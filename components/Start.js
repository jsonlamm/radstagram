// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createReactClass from 'create-react-class';
// styles

// components
import SinglePost from '../components/SinglePost';
import Grid from '../components/Grid';


const Main = createReactClass({
	render() {
		return (
			<div>
				<h1>
					<Router>
						<Link to="/">Radstagram!</Link>
					</Router>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

Main.defaultProps = {
	options: ['hello', 'hola', 'guten tag']
}

export default Main;
