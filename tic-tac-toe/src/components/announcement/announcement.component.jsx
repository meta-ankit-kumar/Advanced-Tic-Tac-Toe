/* eslint-disable react/prop-types */
import './announcement.css';

const getResultInfo = (firstPlayerName, secondPlayerName, winnerName) => {
	if (firstPlayerName === winnerName)
		return [firstPlayerName, secondPlayerName];
	return [secondPlayerName, firstPlayerName];
};

export const Announcement = ({ firstPlayerName, winnerName, isTied, vsComputer, secondPlayerName }) => {
	if (isTied) {
		return (
			<div className='winner-information'>Match is tied.</div>
		);
	}
	const results = getResultInfo(firstPlayerName, secondPlayerName, winnerName);
	return (
		<div className='winner-information'>
			<div className='announcement-container'>
				<div>Game Over</div>
				{!vsComputer && <div className="heading">Congratulations {results[0]} !!!</div>}
				{<div>Better Luck Next Time, {results[1]}</div>}
			</div>
		</div>
	);
};