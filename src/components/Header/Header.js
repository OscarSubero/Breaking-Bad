import React from 'react';
import './Header.css';
import img from './bb-logo.png';

function Header() {
	return (
		<div className='Header'>
			<h1>Breaking Bad</h1>
			<img src={img} alt='Breaking Bad Logo' width='150px' />
		</div>
	);
}

export default Header;
