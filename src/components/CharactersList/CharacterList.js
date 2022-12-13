import React, { useState, useEffect } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import axios, { AxiosError } from 'axios';
import './CharacterList.css';
//LINK ROUTER DOM
import { Link } from 'react-router-dom';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

function CharacterList() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) => {
			setCharacters(res.data);
			console.log("No error",res);
		}).catch((error) => console.log("error",error) ); 
	}, []);

	 if (characters.length === 0) {
	 	return (
	 		<div style={{ padding: 40 }}>
	 			<h1>Error Accediendo a Breakingbadapi: {AxiosError.message}</h1>
	 			<p>https://breakingbadapi.com/</p>
			</div>
	 	);
	 }
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
