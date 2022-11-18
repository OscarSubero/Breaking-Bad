import React, { useState, useEffect } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import axios from 'axios';
import './CharacterList.css';
//LINK ROUTER DOM
import { Link } from 'react-router-dom';

function CharacterList() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) => {
			// console.log(res.data);
			setCharacters(res.data);
		});
	}, []);

	return (
		<div className='CharacterList-container'>
			{characters.map((char) => {
				// console.log('id', char.char_id);
				return (
					<div key={char.char_id} className='CharacterCard-Container'>
						<Link to={`/detail/${char.char_id}`}>
							<CharacterCard data={char} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default CharacterList;
