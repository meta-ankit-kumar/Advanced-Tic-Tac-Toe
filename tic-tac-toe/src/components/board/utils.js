export const boardData = [
	{
		id: 1,
		text: ''
	},
	{
		id: 2,
		text: ''
	},
	{
		id: 3,
		text: ''
	},
	{
		id: 4,
		text: ''
	},
	{
		id: 5,
		text: ''
	},
	{
		id: 6,
		text: ''
	},
	{
		id: 7,
		text: ''
	},
	{
		id: 8,
		text: ''
	},
	{
		id: 9,
		text: ''
	},
];

export const checkResult = (boardInfo) => {
	const board = [];
	for (let i = 0; i < 3; i++) {
		board.push([...boardInfo.slice(i * 3, (i * 3) + 3)]);
	}

	if (board.every(rowInfo => rowInfo.every(cellInfo => !cellInfo.text.length)))	return formatResult(false);

	if ((board[1][1]).text.length) {
		const diagonalsResult = checkDiagonals(board);
		if (diagonalsResult.result) return diagonalsResult;

		const aroundCenterResult = checkAroundTheCenter(board);
		if (aroundCenterResult.result) return aroundCenterResult;
	}

	if (board[0][0].text.length) {
		const firstRowAndColumnResult = checkFirstRowAndColumn(board);
		if (firstRowAndColumnResult.result) return firstRowAndColumnResult;
	}

	if (board[0][2].text.length) {
		const lastColumnResult = checkLastColumn(board);
		if (lastColumnResult.result) return lastColumnResult;
	}

	if (board[2][0].text.length) {
		const lastRowResult = checkLastRow(board);
		if (lastRowResult.result) return lastRowResult;
	}

	const tieResult = checkTie(board);
	console.log('TieResult', JSON.stringify(tieResult));
	if (tieResult.isTie) {
		return tieResult;
	}
	return formatResult(false);
};

const checkTie = (board) => {
	if (board.every(rowInfo => rowInfo.every(cellInfo => cellInfo.text.length)))	return formatResult(false, '', true);
	return formatResult(false);
};

const checkLastRow = (board) => {
	const lastColumn = board[2][0].text;
	if ([board[2][1], board[2][2]].every(cellInfo => cellInfo.text === lastColumn))
		return formatResult(true, lastColumn);
	return formatResult(false);
};

const checkLastColumn = (board) => {
	const lastColumn = board[0][2].text;
	if ([board[1][2], board[2][2]].every(cellInfo => cellInfo.text === lastColumn))
		return formatResult(true, lastColumn);
	return formatResult(false);
};

const checkFirstRowAndColumn = (board) => {
	const firstElement = board[0][0].text;
	if ([board[1][0], board[2][0]].every(cellInfo => cellInfo.text === firstElement))
		return formatResult(true, firstElement);
	
	if ([board[0][1], board[0][2]].every(cellInfo => cellInfo.text === firstElement))
		return formatResult(true, firstElement);

	return formatResult(false);
};

const checkAroundTheCenter = (board) => {
	const middleElement = board[1][1].text;
	if ([board[0][1], board[2][1]].every(cellInfo => cellInfo.text === middleElement))
		return formatResult(true, middleElement);
	if ([board[1][0], board[1][2]].every(cellInfo => cellInfo.text === middleElement))
		return formatResult(true, middleElement);
	return formatResult(false);
};

const checkDiagonals = (board) => {
	const middleElement = board[1][1].text;
	if ([board[0][0], board[2][2]].every(cellInfo => cellInfo.text === middleElement))
		return formatResult(true, middleElement);
	if ([board[2][0], board[0][2]].every(cellInfo => cellInfo.text === middleElement))
		return formatResult(true, middleElement);
	return formatResult(false);
};

const formatResult = (result, winningSymbol, isTie = false) => ({result, winningSymbol, isTie});