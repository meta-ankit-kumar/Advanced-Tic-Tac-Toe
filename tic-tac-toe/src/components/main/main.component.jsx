import { useState } from 'react';
import { PAGE_NAME } from '../../shared/constants';
import { Form } from '../form/form.component';
import { Game } from '../game/game.component';
import { Selection } from '../selection/selection.component';
// import Loading from '../loading/loading.component';



/**
 * Main component 
 * @param {*} props Properties
 */
export const Main = () => {
	const [name, setName] = useState('');
	const [currentPage, setCurrentPage] = useState(PAGE_NAME.FORM);

	const getComponentAccordingToCurrentPage = (currentPage) => {
		switch (currentPage) {
		case PAGE_NAME.FORM:
			return (
				<Form name={name} setName={setName} setCurrentPage={setCurrentPage}/>
			);
		case PAGE_NAME.GAME:
			return (<Game name={name}/>);
		case PAGE_NAME.SELECTION:
			return (<Selection name={name} setCurrentPage={setCurrentPage}/>);
		case PAGE_NAME.PLAY_VS_FRIEND:
			return (<h1>Play With Friend</h1>);
		case PAGE_NAME.PLAY_VS_COMPUTER:
			return (<h1>Play With Computer</h1>);
		default:
			break;
		}
	};
	return (
		getComponentAccordingToCurrentPage(currentPage)
	);
};