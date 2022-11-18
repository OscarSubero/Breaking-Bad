import React from 'react';
import './Home.css';
import CharacterList from '../../components/CharactersList/CharacterList';

function Home() {
	return (
		<div className='Home' style={{ padding: 40 }}>
			<CharacterList />
		</div>
	);
}

export default Home;
