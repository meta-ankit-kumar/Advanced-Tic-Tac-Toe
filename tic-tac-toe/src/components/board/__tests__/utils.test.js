/* eslint-disable no-undef */
import { checkResult } from '../utils';

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