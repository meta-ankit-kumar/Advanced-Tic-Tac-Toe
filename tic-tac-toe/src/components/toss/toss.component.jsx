/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './toss.css';
import front from '../../assets/images/coin-front.png';
import back from '../../assets/images/coin-back.png';
import { TossSelection } from '../tossSelection/tossSelection.component';
import 'react-toastify/dist/ReactToastify.css';

const getStyleClass = (tossState) => {
	switch (tossState) {
	case ['NOT_STARTED', 'HEAD_WON', 'TAIL_WON'].includes(tossState):
		return '';
	case 'IN_PROGRESS':
		return 'coin-animation';
	default:
		break;
	}
};

const getCoinAccordingToTheResult = (tossState) => {
	if (tossState === 'HEAD_WON')
		return back;
	else if (tossState === 'TAIL_WON')
		return front;
	return front;
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


// eslint-disable-next-line react/prop-types
export const Toss = ({ firstPlayerName, secondPlayerName }) => {
	const [tossState, setTossState] = useState('NOT_STARTED');
	const [firstPlayerChoice, setFirstPlayerChoice] = useState(undefined);

	const handleButtonClick = async () => {
		setTossState('IN_PROGRESS');
		const result = await tossCoin();
		console.log('Result', result);
		setTossState(result);
	};

	useEffect(() => {
		if (firstPlayerChoice) {
			toast.info(`${firstPlayerName} has selected ${firstPlayerChoice}`);
			console.log('Toast event has fired');
		}
	}, [firstPlayerChoice]);
	if (!firstPlayerChoice) {
		return (
			<TossSelection firstPlayerName={firstPlayerName} secondPlayerName={secondPlayerName} setFirstPlayerChoice={setFirstPlayerChoice}/>
		);
	}
	return (
		<>
			<ToastContainer/>
			<div className='toss-container'>
				<img src={getCoinAccordingToTheResult(tossState)} height='110' className={getStyleClass(tossState)}/>
				{/* <div className={getStyleClass(tossState)}>
				</div> */}
			</div>
			<>
				<div className='button-container'>
					<Button onClick={() => handleButtonClick()} color='success' variant="outlined">Toss</Button>
				</div>
			</>
		</>
	);
};