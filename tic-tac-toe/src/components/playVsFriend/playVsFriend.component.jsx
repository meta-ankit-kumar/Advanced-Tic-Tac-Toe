import { useState } from 'react';
import { Form } from '../form/form.component';
import { Toss } from '../toss/toss.component';
import { Board } from '../board/board.component';

// eslint-disable-next-line react/prop-types
export const PlayVsFriend = ({ firstPlayerName, vsComputer }) => {
	const [friendName, setFriendName] = useState('');
	const [tossWinner, setTossWinner] = useState('');
	if (tossWinner) {
		return (
			<Board tossWinner={tossWinner} firstPlayerName={firstPlayerName} secondPlayerName={vsComputer ? 'Computer' : friendName}/>
		);
	}
	else if (friendName.length)
		return (
			<Toss firstPlayerName={firstPlayerName} secondPlayerName={friendName} setTossWinner={setTossWinner}/>
		);
	else if (!vsComputer)
		return (
			<Form name={friendName} placeholder="Your Friend's Name" setName={setFriendName}/>
		);
	else if (vsComputer) {
		return (
			<Toss firstPlayerName={firstPlayerName} secondPlayerName={'Computer'} setTossWinner={setTossWinner}/>
		);
	}
};