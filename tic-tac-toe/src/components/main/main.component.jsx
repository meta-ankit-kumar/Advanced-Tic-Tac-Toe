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
			return (<Selection name={name}/>);
		default:
			break;
		}
	};
	return (
		getComponentAccordingToCurrentPage(currentPage)
	);
};