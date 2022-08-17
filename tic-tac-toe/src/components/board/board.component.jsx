import { Cell } from '../cell/cell.component';
import { Grid } from '@mui/material';
import { boardData as data, checkIfPlayerIsWinning, checkResult} from './utils';
import { useState, useEffect } from 'react';
import { Info } from '../info/info.component';
import { Announcement } from '../announcement/announcement.component';
import './board.css';
import { wait } from '../../shared/utils';
import { PRIORITY_CELLS_FOR_COMPUTER } from '../../shared/constants';

let gameInfo = {};

const setUserChoice = async (boardData, userChoice, setBoardData) => {
	boardData.forEach(cellInfo => {
		if (cellInfo.id === userChoice.id)
			cellInfo.text = userChoice.text;
	});
	console.log('Set User choice called', userChoice);
	gameInfo.currentTurn = gameInfo.currentTurn === 1 ? 2 : 1;
	setBoardData([...boardData]);
	console.log('after board data');
	// if(await checkForWinner(boardData, setResult))
	// 	return;
	// const currentPlayer = gameInfo[gameInfo[gameInfo.currentTurn]];
	// if (currentPlayer === 'Computer') {
	// 	decideComputerMove(boardData, setBoardData, gameInfo[gameInfo.currentTurn]);
	// 	checkForWinner(boardData, setResult);
	// }
};

const checkForWinner = async (boardData, setResult) => {
	console.log('Checking for the winner');
	const isThereAnyWinner = checkResult(boardData);
	if (isThereAnyWinner.result) {
		await wait(1000);
		const resultInfo = {
			winnerName: gameInfo[isThereAnyWinner.winningSymbol]
		};
		setResult(resultInfo);
		return true;
	}
	else if (isThereAnyWinner.isTie) {
		await wait(1000);
		const resultInfo = {
			isTied: true
		};
		
		setResult(resultInfo);
		return true;
	}
	console.log('There is no result till now');
	return false;
};

const decideComputerMove = async (boardData, setBoardData, computerSymbol) => {
	console.log('Deciding the computer move');
	gameInfo.currentTurn = gameInfo.currentTurn === 1 ? 2 : 1;
	await wait(2000);
	const checkIfComputerIsWinning = checkIfPlayerIsWinning(boardData, computerSymbol);
	const checkIfOpponentIsWinning = checkIfPlayerIsWinning(boardData, ['X', 'O'].filter(x => x !== computerSymbol)[0]);
	console.log({checkIfComputerIsWinning});
	console.log({checkIfOpponentIsWinning});
	if (checkIfComputerIsWinning.result)
		boardData[checkIfComputerIsWinning.cellInfo - 1].text = computerSymbol;
	else if (checkIfOpponentIsWinning.result)
		boardData[checkIfOpponentIsWinning.cellInfo - 1].text = computerSymbol;
	else {
		const highestPriorityCell = retrievePriorityCell(boardData);
		console.log('highestPriorityCell', highestPriorityCell);
		if (highestPriorityCell) {
			boardData[highestPriorityCell - 1].text = computerSymbol;
		}
		else {
			let computerMove = Math.floor((Math.random() * 9));
			while(boardData[computerMove].text.length) {
				computerMove = Math.floor((Math.random() * 9));
			}	
			boardData[computerMove].text = computerSymbol;
		}
	}
	setBoardData([...boardData]);
};

const retrievePriorityCell = (boardData) => {
	return PRIORITY_CELLS_FOR_COMPUTER.find(priorityCellInfo => !boardData[priorityCellInfo - 1].text.length);
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
	console.log({secondPlayerName});
	const [boardData, setBoardData] = useState(data);
	const [result, setResult] = useState('');
	useEffect(() => {
		const computerMove = async () => {
			const result = await checkForWinner(boardData, setResult);
			if (result) return;
			const currentPlayer = gameInfo[gameInfo[gameInfo.currentTurn]];
			if (currentPlayer === 'Computer' && !Object.keys(result).length) {
				await decideComputerMove(boardData, setBoardData, gameInfo[gameInfo.currentTurn]);
				await checkForWinner(boardData, setResult);
			}
		};
		computerMove();
	}, [boardData]);
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