/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './toss.css';
import front from '../../assets/images/coin-front.png';
import back from '../../assets/images/coin-back.png';
import { TossSelection } from '../tossSelection/tossSelection.component';
import 'react-toastify/dist/ReactToastify.css';
import { wait } from '../../shared/utils';

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
	if (tossState === 'HEADS_WON')
		return back;
	else if (tossState === 'TAILS_WON')
		return front;
	return front;
};

const tossCoin = async () => {
	console.log('In tossCoin function');
	await wait(4800);
	const result = Math.floor((Math.random() * 2) + 1);
	if (result === 1)
		return 'TAILS_WON';
	return 'HEADS_WON';
};


// eslint-disable-next-line react/prop-types
export const Toss = ({ firstPlayerName, secondPlayerName, setTossWinner }) => {
	const [tossState, setTossState] = useState('NOT_STARTED');
	const [firstPlayerChoice, setFirstPlayerChoice] = useState(undefined);

	const handleButtonClick = async () => {
		setTossState('IN_PROGRESS');
		const result = await tossCoin();
		console.log('Result', result);
		setTossState(result);
		if (result.split('_')[0].includes(firstPlayerChoice.toUpperCase())) {
			toast.success(`${firstPlayerName} has won the toss`);
			await wait(4000);
			setTossWinner(1);
		}
		else {
			toast.success(`${secondPlayerName} has won the toss`);
			await wait(4000);
			setTossWinner(2);
		}
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
					<Button className='toss-button' disabled={tossState !== 'NOT_STARTED'} onClick={() => handleButtonClick()} color='success' variant="outlined">Toss</Button>
				</div>
			</>
		</>
	);
};