import './selection.css';
import { Button, Typography } from '@mui/material';
import { USER_CHOICE } from '../../shared/constants';
// eslint-disable-next-line react/prop-types
export const Selection = ({ name, setCurrentPage }) => {
	console.log('setCurrentPage', setCurrentPage);
	return (
		<div className='selection-container'>
			<div>
				<div>
					<Typography className='container' variant="h3" component="div" gutterBottom>
						Hi,&nbsp;<Typography className='name' variant="h3">{name}</Typography> !!!
					</Typography>
					<Typography className='container info-message' variant="h4" component="div" gutterBottom>
						Play<Typography variant='h4' className="selection-heading">TIC-TAC-TOE</Typography>vs
					</Typography>
				</div>
				<div className='container button-container'>
					<Button variant="contained" color="info" sx={{ margin: '1rem' }} onClick={() => setCurrentPage(USER_CHOICE.A_FRIEND.description)}>
						{USER_CHOICE.A_FRIEND.description}
					</Button>
					<Button variant="contained" color="success" onClick={() => setCurrentPage(USER_CHOICE.THE_COMPUTER.description)}>
						{USER_CHOICE.THE_COMPUTER.description}
					</Button>
				</div>
			</div>
		</div>

	);
};