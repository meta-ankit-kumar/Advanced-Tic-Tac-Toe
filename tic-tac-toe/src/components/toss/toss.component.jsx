import { Button } from '@mui/material';
import { useState } from 'react';
import './toss.css';


const getStyleClass = (tossState) => {
	switch (tossState) {
	case 'NOT_STARTED':
		return 'tail-side coin';
	case 'IN_PROGRESS':
		return 'tail-side coin-animation coin';
	case 'HEAD_WON':
		return 'head-side coin';
	case 'TAIL_WON':
		return 'tail-side coin';
	default:
		break;
	}
};

const wait = async (time) => {
	return new Promise(resolve => {
		setTimeout(resolve, time);
	});
};

const tossCoin = async () => {
	console.log('In tossCoin function');
	await wait(4800);
	const result = Math.floor((Math.random() * 2) + 1);
	if (result === 1)
		return 'TAIL_WON';
	return 'HEAD_WON';
};


export const Toss = () => {
	const [tossState, setTossState] = useState('NOT_STARTED');

	const handleButtonClick = async () => {
		setTossState('IN_PROGRESS');
		const result = await tossCoin();
		console.log('Result', result);
		setTossState(result);
	};
	return (
		<>
			<div className='toss-container'>
				<div className={getStyleClass(tossState)}>
				</div>
			</div>
			<>
				<div className='button-container'>
					<Button onClick={() => handleButtonClick()} color='success' variant="outlined">Toss</Button>
				</div>
			</>
		</>
	);
};