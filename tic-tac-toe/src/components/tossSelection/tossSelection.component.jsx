/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Typography, Button } from '@mui/material';
import './tossSelection.css';
// eslint-disable-next-line react/prop-types

const handleClick = (event, setFirstPlayerChoice) => {
	setFirstPlayerChoice(event.target.textContent);
};

export const TossSelection = ({ firstPlayerName, secondPlayerName, setFirstPlayerChoice }) => {
	return (
		<div>
			<div className='toss-selection'>
				<Typography variant='h3' component='div' sx={{ textAlign: 'center', margin: '4%' }}>There will be a <Typography className='name' variant="h3" component='span'>toss&nbsp;</Typography>to decide the first move.</Typography>
				<Typography variant='h4' component='div' sx={{ textAlign: 'center', marginBottom: '3%' }}><span className="player-name">{firstPlayerName.toUpperCase()}, </span> Please pick your choice</Typography>
			</div>
			<div className='choice-section'>
				<Button variant='contained' color='primary' onClick={(event) => handleClick(event, setFirstPlayerChoice)}>Heads</Button>
				<Button variant='contained' color='success' onClick={(event) => handleClick(event, setFirstPlayerChoice)}>Tails</Button>
			</div>
		</div>
	);
};