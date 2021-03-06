import { useState } from 'react';
import { Form } from '../form/form.component';
import { Toss } from '../toss/toss.component';
// eslint-disable-next-line react/prop-types
export const PlayVsFriend = ({ firstPlayerName }) => {
	const [friendName, setFriendName] = useState('');
	if (friendName.length)
		return (
			<Toss firstPlayerName={firstPlayerName} secondPlayerName={friendName}/>
		);
	return (
		<Form name={friendName} placeholder="Your Friend's Name" setName={setFriendName}/>
	);
};