/* eslint-disable no-undef */
import { checkResult, retrieveIdOfTheCell, checkIfPlayerIsWinning } from '../utils';

describe('utils checkResult', () => {
	it('should return the result as false when the board is empty', () => {
		const board = [
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

		// WHEN
		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(false);
	});

	it('should return the expected result when the board there is not a complete match for the first row', () => {
		const board = [
			{
				id: 1,
				text: 'X'
			},
			{
				id: 2,
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(false);
	});

	it('should return the expected result when the board there is not a complete match for the second row', () => {
		const board = [
			{
				id: 1,
				text: 'X'
			},
			{
				id: 2,
				text: 'X'
			},
			{
				id: 3,
				text: ''
			},
			{
				id: 4,
				text: 'X'
			},
			{
				id: 5,
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(false);
	});

	it('should return the expected result when the board there is not complete match for the third row', () => {
		const board = [
			{
				id: 1,
				text: 'X'
			},
			{
				id: 2,
				text: 'X'
			},
			{
				id: 3,
				text: ''
			},
			{
				id: 4,
				text: 'X'
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
				text: 'X'
			},
			{
				id: 9,
				text: 'X'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(false);
	});

	it('should return the expected result when the board there is not a complete diagonal match', () => {
		const board = [
			{
				id: 1,
				text: 'X'
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
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(false);
	});

	it('should return the expected result when the board there is not a complete reverse diagonal match', () => {
		const board = [
			{
				id: 1,
				text: 'X'
			},
			{
				id: 2,
				text: ''
			},
			{
				id: 3,
				text: 'X'
			},
			{
				id: 4,
				text: ''
			},
			{
				id: 5,
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(false);
	});
	it('should return the expected result and symbol X when the board there is a diagonal match', () => {
		const board = [
			{
				id: 1,
				text: 'X'
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
				text: 'X'
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
				text: 'X'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a diagonal match', () => {
		const board = [
			{
				id: 1,
				text: 'O'
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
				text: 'O'
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
				text: 'O'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a reverse diagonal match', () => {
		const board = [
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
				text: 'X'
			},
			{
				id: 4,
				text: ''
			},
			{
				id: 5,
				text: 'X'
			},
			{
				id: 6,
				text: ''
			},
			{
				id: 7,
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});
	it('should return the expected result and symbol O when the board there is a reverse diagonal match', () => {
		const board = [
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
				text: 'O'
			},
			{
				id: 4,
				text: ''
			},
			{
				id: 5,
				text: 'O'
			},
			{
				id: 6,
				text: ''
			},
			{
				id: 7,
				text: 'O'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a match in the first row', () => {
		const board = [
			{
				id: 1,
				text: 'X'
			},
			{
				id: 2,
				text: 'X'
			},
			{
				id: 3,
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a match in the first row', () => {
		const board = [
			{
				id: 1,
				text: 'O'
			},
			{
				id: 2,
				text: 'O'
			},
			{
				id: 3,
				text: 'O'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a match in the second row', () => {
		const board = [
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
				text: 'X'
			},
			{
				id: 5,
				text: 'X'
			},
			{
				id: 6,
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a match in the second row', () => {
		const board = [
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
				text: 'O'
			},
			{
				id: 5,
				text: 'O'
			},
			{
				id: 6,
				text: 'O'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a match in the third row', () => {
		const board = [
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
				text: 'X'
			},
			{
				id: 8,
				text: 'X'
			},
			{
				id: 9,
				text: 'X'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a match in the third row', () => {
		const board = [
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
				text: 'O'
			},
			{
				id: 8,
				text: 'O'
			},
			{
				id: 9,
				text: 'O'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a match in the first column', () => {
		const board = [
			{
				id: 1,
				text: 'X'
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
				text: 'X'
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
				text: 'X'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a match in the first column', () => {
		const board = [
			{
				id: 1,
				text: 'O'
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
				text: 'O'
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
				text: 'O'
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
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a match in the second column', () => {
		const board = [
			{
				id: 1,
				text: ''
			},
			{
				id: 2,
				text: 'X'
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
				text: 'X'
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
				text: 'X'
			},
			{
				id: 9,
				text: ''
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a match in the second column', () => {
		const board = [
			{
				id: 1,
				text: ''
			},
			{
				id: 2,
				text: 'O'
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
				text: 'O'
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
				text: 'O'
			},
			{
				id: 9,
				text: ''
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});

	it('should return the expected result and symbol X when the board there is a match in the third column', () => {
		const board = [
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
				text: 'X'
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
				text: 'X'
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
				text: 'X'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('X');
	});

	it('should return the expected result and symbol O when the board there is a match in the third column', () => {
		// GIVEN
		const board = [
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
				text: 'O'
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
				text: 'O'
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
				text: 'O'
			},
		];
		// WHEN

		const result = checkResult(board);

		// THEN
		expect(result.result).toBe(true);
		expect(result.winningSymbol).toBe('O');
	});
});
describe('utils checkIfPlayerIsWinning', () => {
	const playerSymbol = 'X';
	const numberMapping = {
		first: 0,
		second: 1,
		third: 2
	};
	const cellMappings = [
		{
			first: 0,
			second: 1
		},
		{
			first: 0,
			third: 2
		},
		{
			second: 1,
			third: 2
		}
	];
	const directionInfo = ['row', 'column'];
	directionInfo.forEach(direction => {
		const secondDirectionInfo = directionInfo.filter(dir => !dir.includes(direction));
		Object.keys(numberMapping).forEach(outerInfo => {
			cellMappings.forEach(innerInfo => {
				it (`should return the expected result and id of the cell when player is winning in the ${Object.keys(innerInfo)[0]} and ${Object.keys(innerInfo)[1]} ${secondDirectionInfo} of the ${outerInfo} ${direction}`, () => {
					// GIVEN
					const board = [
						{
							id: 1,
							text: '',
						},
						{
							id: 2,
							text: '',
						},
						{
							id: 3,
							text: '',
						},
						{
							id: 4,
							text: '',
						},
						{
							id: 5,
							text: '',
						},
						{
							id: 6,
							text: '',
						},
						{
							id: 7,
							text: '',
						},
						{
							id: 8,
							text: '',
						},
						{
							id: 9,
							text: '',
						},
					];
					const [row1, row2] = direction === 'row' ? [numberMapping[outerInfo], numberMapping[outerInfo]] : Object.values(innerInfo);
					const [column1, column2] = direction === 'column' ? [numberMapping[outerInfo], numberMapping[outerInfo]] : Object.values(innerInfo);
					const idOfTheFirstFilledCell = retrieveIdOfTheCell(row1, column1);
					const idOfTheSecondFilledCell = retrieveIdOfTheCell(row2, column2);

					console.log(direction, row1, row2, column1, column2, idOfTheFirstFilledCell, idOfTheSecondFilledCell);
					board.forEach(boardInfo => {
						if ([idOfTheFirstFilledCell, idOfTheSecondFilledCell].includes(boardInfo.id))
							boardInfo.text = playerSymbol; 
					});
	
					// WHEN
					const response = checkIfPlayerIsWinning(board, playerSymbol);
	
					// THEN
					expect(response.result).toBe(true);
					const unfilledCell = Object.values(numberMapping).filter(number => ![Object.values(innerInfo)[0], Object.values(innerInfo)[1]].includes(number))[0];
					row1 === row2 
						? expect(response.cellInfo).toBe(retrieveIdOfTheCell(numberMapping[outerInfo], unfilledCell))
						: expect(response.cellInfo).toBe(retrieveIdOfTheCell(unfilledCell, numberMapping[outerInfo]));
				});
			});
		});
	});
	directionInfo.forEach(direction => {
		Object.keys(numberMapping).forEach(outerInfo => {
			const secondDirectionInfo = directionInfo.filter(dir => !dir.includes(direction));
			cellMappings.forEach(innerInfo => {
				it (`should return the expected result as false when player is not winning in the ${Object.keys(innerInfo)[0]} and ${Object.keys(innerInfo)[1]} ${secondDirectionInfo} of the ${outerInfo} ${direction}`, () => {
					// GIVEN
					const board = [
						{
							id: 1,
							text: '',
						},
						{
							id: 2,
							text: '',
						},
						{
							id: 3,
							text: '',
						},
						{
							id: 4,
							text: '',
						},
						{
							id: 5,
							text: '',
						},
						{
							id: 6,
							text: '',
						},
						{
							id: 7,
							text: '',
						},
						{
							id: 8,
							text: '',
						},
						{
							id: 9,
							text: '',
						},
					];
					const [row1, row2] = direction === 'row' ? [numberMapping[outerInfo], numberMapping[outerInfo]] : Object.values(innerInfo);
					const [column1, column2] = direction === 'column' ? [numberMapping[outerInfo], numberMapping[outerInfo]] : Object.values(innerInfo);
					const idOfTheFirstFilledCell = retrieveIdOfTheCell(row1, column1);
					const idOfTheSecondFilledCell = retrieveIdOfTheCell(row2, column2);

					console.log(direction, row1, row2, column1, column2, idOfTheFirstFilledCell, idOfTheSecondFilledCell);
					board.forEach(boardInfo => {
						if ([idOfTheFirstFilledCell, idOfTheSecondFilledCell].includes(boardInfo.id))
							boardInfo.text = playerSymbol; 
						else
							boardInfo.text = ['X', 'O'].find(symbol => symbol !== playerSymbol)[0]; 
					});
	
					// WHEN
					const response = checkIfPlayerIsWinning(board, playerSymbol);
	
					// THEN
					expect(response.result).toBe(false);
				});
			});
		});
	});
	const diagonalMappings = {
		'diagonally': [[1, 5], [1, 9], [5, 9]],
		'reverse diagonally': [[3, 5], [3, 7], [5, 7]]
	};
	['diagonally', 'reverse diagonally'].forEach(dirInfo => {
		diagonalMappings[dirInfo].forEach(cellInfo => {
			it (`should return the expected result and id of the cell when player is winning ${dirInfo}`, () => {
				// GIVEN
				const board = [
					{
						id: 1,
						text: '',
					},
					{
						id: 2,
						text: '',
					},
					{
						id: 3,
						text: '',
					},
					{
						id: 4,
						text: '',
					},
					{
						id: 5,
						text: '',
					},
					{
						id: 6,
						text: '',
					},
					{
						id: 7,
						text: '',
					},
					{
						id: 8,
						text: '',
					},
					{
						id: 9,
						text: '',
					},
				];

				board.forEach(cell => {
					if (cellInfo.includes(cell.id))
						cell.text = playerSymbol;
				});

				// WHEN
				const response = checkIfPlayerIsWinning(board, playerSymbol);
	
				// THEN
				expect(response.result).toBe(true);
				expect(response.cellInfo).toBe(diagonalMappings[dirInfo].flat().find(cellId => !cellInfo.includes(cellId)));
			});
		});
	});

	['diagonally', 'reverse diagonally'].forEach(dirInfo => {
		diagonalMappings[dirInfo].forEach(cellInfo => {
			it (`should return the expected result as false when player is not winning ${dirInfo}`, () => {
				// GIVEN
				const board = [
					{
						id: 1,
						text: '',
					},
					{
						id: 2,
						text: '',
					},
					{
						id: 3,
						text: '',
					},
					{
						id: 4,
						text: '',
					},
					{
						id: 5,
						text: '',
					},
					{
						id: 6,
						text: '',
					},
					{
						id: 7,
						text: '',
					},
					{
						id: 8,
						text: '',
					},
					{
						id: 9,
						text: '',
					},
				];

				board.forEach(cell => {
					if (cellInfo.includes(cell.id))
						cell.text = playerSymbol;
					else
						cell.text = ['X', 'O'].find(symbol => symbol !== playerSymbol)[0];
				});

				// WHEN
				const response = checkIfPlayerIsWinning(board, playerSymbol);
	
				// THEN
				expect(response.result).toBe(false);
			});
		});
	});
});
