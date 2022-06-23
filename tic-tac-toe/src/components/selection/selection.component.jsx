import './selection.css';
import { Button, Typography } from '@mui/material';
// eslint-disable-next-line react/prop-types
export const Selection = ({ name }) => {
	return (
		<div className='selection-container'>
			<div>
				<div>
					<Typography className='container' variant="h3" component="div" gutterBottom>
						Hi {name}!!!
					</Typography>
					<Typography className='container info-message' variant="h4" component="div" gutterBottom>
						Play<Typography variant='h4' className="selection-heading">TIC-TAC-TOE</Typography>vs
					</Typography>
				</div>
				<div className='container button-container'>
					<Button variant="contained" color="info" sx={{ margin: '1rem' }}>A Friend</Button>
					<Button variant="contained" color="success">The Computer</Button>
				</div>
			</div>
		</div>

	);
};