import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
			<div className="container">
				<Link to="/" className="navbar-brand">ReactApp</Link>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to="/about" className="nav-link">About</Link>
					</li>
					<li className="nav-item">
						<Link to="/services" className="nav-link">Services</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};