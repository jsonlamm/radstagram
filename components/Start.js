// dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
					<BrowserRouter>
						<Link to="/">Radstagram!</Link>
					</BrowserRouter>
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
