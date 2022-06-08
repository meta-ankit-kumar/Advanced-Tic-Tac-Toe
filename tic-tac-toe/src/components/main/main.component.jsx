import { Game } from '../game/game.component';
import Loading from '../loading/loading.component';

/**
 * Main component 
 * @param {*} props Properties
 */
export const Main = () => {
	return (
		<h1>
            Tic Tac Toe is coming.... Ankit Bishnoi is heading this project Continue.
			<Loading/>
			<Game/>
		</h1>
	);
};