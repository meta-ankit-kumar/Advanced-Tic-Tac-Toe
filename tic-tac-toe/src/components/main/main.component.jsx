import { Form } from '../form/form.component';
import { Game } from '../game/game.component';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Loading from '../loading/loading.component';
  
/**
 * Main component 
 * @param {*} props Properties
 */
export const Main = () => {
	return (
		<Router basename='Advanced-Tic-Tac-Toe'>
			<Routes>
				<Route path='/form' element={<Form/>}/>
				<Route path='/home' element={<Form/>}/>
				<Route path='/game' element={<Game/>}/>
				<Route path='/loading' element={<Loading/>}/>
			</Routes>
		</Router>
	);
};