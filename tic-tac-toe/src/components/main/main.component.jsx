import { useState } from 'react';
import { Form } from '../form/form.component';
// import { Game } from '../game/game.component';
// import Loading from '../loading/loading.component';

/**
 * Main component 
 * @param {*} props Properties
 */
export const Main = () => {
	const [name, setName] = useState('');
	return (
		<Form name={name} setName={setName}/>
	);
};