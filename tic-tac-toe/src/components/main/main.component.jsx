import { useState } from 'react';
import { PAGE_NAME } from '../../shared/constants';
import { Form } from '../form/form.component';
import { Game } from '../game/game.component';
import { PlayVsComputer } from '../playVsComputer/playVsComputer.component';
import { PlayVsFriend } from '../playVsFriend/playVsFriend.component';
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
				<Form name={name} setName={setName} placeholder='Your name' setCurrentPage={setCurrentPage}/>
			);
		case PAGE_NAME.GAME:
			return (<Game name={name}/>);
		case PAGE_NAME.SELECTION:
			return (<Selection name={name} setCurrentPage={setCurrentPage}/>);
		case PAGE_NAME.PLAY_VS_FRIEND:
			return (<PlayVsFriend/>);
		case PAGE_NAME.PLAY_VS_COMPUTER:
			return (<PlayVsComputer/>);
		default:
			break;
		}
	};
	return (
		getComponentAccordingToCurrentPage(currentPage)
	);
};