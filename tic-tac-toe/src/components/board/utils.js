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

const transformArray = (boardInfo) => {
	const board = [];
	for (let i = 0; i < 3; i++) {
		board.push([...boardInfo.slice(i * 3, (i * 3) + 3)]);
	}
	return board;
};

export const checkResult = (boardInfo) => {
	const board = transformArray(boardInfo);

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

export const checkIfPlayerIsWinning = (boardInfo, playerSymbol) => {
	const board = transformArray(boardInfo);

	const rowWiseResults = [retrieveMatchingInfoForRow(board, 0, playerSymbol), retrieveMatchingInfoForRow(board, 1, playerSymbol), retrieveMatchingInfoForRow(board, 2, playerSymbol)];
	const anyMatchForRow = rowWiseResults.find(result => result.result);
	if (anyMatchForRow && anyMatchForRow.result)
		return anyMatchForRow;
	
	const columnWiseResults = [retrieveMatchingInfoForColumn(board, 0, playerSymbol), retrieveMatchingInfoForColumn(board, 1, playerSymbol), retrieveMatchingInfoForColumn(board, 2, playerSymbol)];
	const anyMatchForColumn = columnWiseResults.find(result => result.result);
	if (anyMatchForColumn && anyMatchForColumn.result)
		return anyMatchForColumn;

	const anyMatchForDiagonal = retrieveMatchingInfoDiagonal(board, playerSymbol);
	if (anyMatchForDiagonal && anyMatchForDiagonal.result)
		return anyMatchForDiagonal;
	
	const anyMatchForReverseDiagonal = retrieveMatchingInfoReverseDiagonal(board, playerSymbol);
	if (anyMatchForReverseDiagonal && anyMatchForReverseDiagonal.result)
		return anyMatchForReverseDiagonal;
	
	return formatWinningCellInfo(false);
};

const retrieveMatchingInfoReverseDiagonal = (board, playerSymbol) => {
	if (board[0][2].text === playerSymbol && board[1][1].text === playerSymbol && !board[2][0].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(2, 0));
	else if (board[0][2].text === playerSymbol && board[2][0].text === playerSymbol && !board[1][1].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(1, 1));
	else if (board[1][1].text === playerSymbol && board[2][0].text === playerSymbol && !board[0][2].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(0, 2));
	return formatWinningCellInfo(false);
};

const retrieveMatchingInfoDiagonal = (board, playerSymbol) => {
	if (board[0][0].text === playerSymbol && board[1][1].text === playerSymbol && !board[2][2].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(2, 2));
	else if (board[0][0].text === playerSymbol && board[2][2].text === playerSymbol && !board[1][1].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(1, 1));
	else if (board[1][1].text === playerSymbol && board[2][2].text === playerSymbol && !board[0][0].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(0, 0));
	return formatWinningCellInfo(false);
};

const retrieveMatchingInfoForColumn = (board, column, playerSymbol) => {
	if (board[0][column].text === playerSymbol && board[1][column].text === playerSymbol && !board[2][column].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(2, column));
	else if (board[0][column].text === playerSymbol && board[2][column].text === playerSymbol && !board[1][column].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(1, column));
	else if (board[1][column].text === playerSymbol && board[2][column].text === playerSymbol && !board[0][column].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(0, column));
	return formatWinningCellInfo(false);
};

const retrieveMatchingInfoForRow = (board, row, playerSymbol) => {
	if (board[row][0].text === playerSymbol && board[row][1].text === playerSymbol && !board[row][2].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(row, 2));
	else if (board[row][0].text === playerSymbol && board[row][2].text === playerSymbol && !board[row][1].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(row, 1));
	else if (board[row][1].text === playerSymbol && board[row][2].text === playerSymbol && !board[row][0].text.length)
		return formatWinningCellInfo(true, retrieveIdOfTheCell(row, 0));
	return formatWinningCellInfo(false);
};

export const retrieveIdOfTheCell = (row, column) => {
	return (3 * row + column + 1);
};

const formatWinningCellInfo = (result, cellInfo) => ({result, cellInfo});

export const findWinningCells = (boardInfo) => {
	const board = transformArray(boardInfo);

	const firstCellInfo = board[0][0].text;
	if ([board[0][1].text, board[0][2].text].every(cellInfo => cellInfo === firstCellInfo))	return [0, 1, 2];
	if ([board[1][0].text, board[2][0].text].every(cellInfo => cellInfo === firstCellInfo))	return [0, 3, 6];
	if ([board[1][1].text, board[2][2].text].every(cellInfo => cellInfo === firstCellInfo))	return [0, 4, 8];

	const firstRowLastCellInfo = board[0][2].text;
	if ([board[1][1].text, board[2][0].text].every(cellInfo => cellInfo === firstRowLastCellInfo))	return [2, 4, 6];
	if ([board[1][2].text, board[2][2].text].every(cellInfo => cellInfo === firstRowLastCellInfo))	return [2, 5, 8];

	const middleRowLastCellInfo = board[1][2].text;
	if ([board[1][1].text, board[1][0].text].every(cellInfo => cellInfo === middleRowLastCellInfo))	return [3, 4, 5];

	const lastRowFirstCellInfo = board[2][0].text;
	if ([board[2][1].text, board[2][2].text].every(cellInfo => cellInfo === lastRowFirstCellInfo))	return [6, 7, 8];
};
