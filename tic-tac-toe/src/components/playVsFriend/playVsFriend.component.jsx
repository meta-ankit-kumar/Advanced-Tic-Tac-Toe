import { useState } from 'react';
import { Form } from '../form/form.component';
// eslint-disable-next-line react/prop-types
export const PlayVsFriend = () => {
	const [friendName, setFriendName] = useState('');
	if (friendName.length)
		return (<h1>Friend {friendName}</h1>);
	return (
		<Form name={friendName} placeholder="Your Friend's Name" setName={setFriendName}/>
	);
};