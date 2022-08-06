import { Cell } from '../cell/cell.component';
import { Grid } from '@mui/material';
import { boardData as data, checkResult} from './utils';
import { useState } from 'react';
import { Info } from '../info/info.component';
import { Announcement } from '../announcement/announcement.component';
import './board.css';

let gameInfo = {};

const setUserChoice = (boardData, userChoice, setBoardData, setResult) => {
	boardData.forEach(cellInfo => {
		if (cellInfo.id === userChoice.id)
			cellInfo.text = userChoice.text;
	});

	console.log('Set User choice called', userChoice);
	setBoardData([...boardData]);
	const isThereAnyWinner = checkResult(boardData);
	if (isThereAnyWinner.result) {
		alert(isThereAnyWinner.winningSymbol + ' Is a winner');
		const resultInfo = {
			winnerName: gameInfo[isThereAnyWinner.winningSymbol]
		};
		setResult(resultInfo);
	}
	else if (isThereAnyWinner.isTie) {
		const resultInfo = {
			isTied: true
		};
		alert('Game tied');
		setResult(resultInfo);
	}
	gameInfo.currentTurn = gameInfo.currentTurn === 1 ? 2 : 1;
};

const renderBoard = (data, setBoardData, setResult) => {
	const cells = data.map(cellInfo => {
		return (
			<Grid key={cellInfo.id} item xs={4}>
				<Cell id={cellInfo.id} text={cellInfo.text} symbol={gameInfo[gameInfo.currentTurn]} setUserChoice={(userChoice) => setUserChoice(data, userChoice, setBoardData, setResult)}/>
			</Grid>
		);
	});
	return (
		<>
			<>
				<div className='board-container'>
					<Grid className='cell-container' container spacing={0}>
						{cells}
					</Grid>
				</div>
			</>
			<>
				<Info currentTurn={gameInfo.currentTurn} X={gameInfo.X} O={gameInfo.O} numberToSymbolMapping={{1: gameInfo[1], 2: gameInfo[2]}}/>
			</>
		</>
	);
};

const setPlayerInfo = (tossWinner, firstPlayerName, secondPlayerName) => {
	console.log('Here in the funtion');
	gameInfo.currentTurn = tossWinner;
	if (tossWinner == 1) {
		gameInfo[1] = 'X';
		gameInfo[2] = 'O';
		gameInfo['X'] = firstPlayerName;
		gameInfo['O'] = secondPlayerName;
	}
	else {
		gameInfo[2] = 'X';
		gameInfo[1] = 'O';
		gameInfo['O'] = firstPlayerName;
		gameInfo['X'] = secondPlayerName;
	}
	console.log('GAMEINFO in function', JSON.stringify(gameInfo));
};

// eslint-disable-next-line react/prop-types
export const Board = ({ tossWinner, firstPlayerName, secondPlayerName }) => {
	const [boardData, setBoardData] = useState(data);
	const [result, setResult] = useState('');
	if (!gameInfo.currentTurn)
		setPlayerInfo(tossWinner, firstPlayerName, secondPlayerName);
	console.log('gameinfo', JSON.stringify(gameInfo));
	if (result) {
		return (
			<Announcement winnerName={result.winnerName} isTied={result.isTied}/>
		);
	}
	return (
		renderBoard(boardData, setBoardData, setResult)
	);
};