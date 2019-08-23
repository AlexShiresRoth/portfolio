import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

export default class ResumeDisplay extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Resume</h1>
                <Link to="/">Home</Link>
			</div>
		);
	}
}
