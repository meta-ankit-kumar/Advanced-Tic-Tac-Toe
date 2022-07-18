import { Cell } from '../cell/cell.component';
import { Grid } from '@mui/material';
import { boardData } from './utils';
import './board.css';

const renderBoard = (data) => {
	const cells = data.map(cellInfo => {
		return (
			<Grid key={cellInfo.id} item xs={4}>
				<Cell id={cellInfo.id} text={cellInfo.text}/>
			</Grid>
		);
	});
	return (
		<div className='board-container'>
			<Grid style={{width: '70vw'}} container spacing={0}>
				{cells}
			</Grid>
		</div>
	);
};
export const Board = () => {
	return (
		renderBoard(boardData)
	);
};