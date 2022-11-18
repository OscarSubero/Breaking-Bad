import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav className='Navigation'>
			<ul>
				<Link className='Link' to='/'>
					Home
				</Link>
				<Link className='Link' to='/about'>
					About
				</Link>
				<Link className='Link' to='/contact'>
					Contact
				</Link>
			</ul>
		</nav>
	);
}

export default Navigation;
