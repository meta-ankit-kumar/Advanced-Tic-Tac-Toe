/* eslint-disable react/prop-types */
import './announcement.css';
export const Announcement = ({ winnerName, isTied }) => {
	if (isTied) {
		return (
			<div className='winner-information'>Match is tied.</div>
		);
	}
	return (
		<div className='winner-information'>
			<div className="heading">Congratulations <span className='winner-name'>{winnerName}</span> !!!</div>
			<div className='title'>You won the game</div>
		</div>
	);
};