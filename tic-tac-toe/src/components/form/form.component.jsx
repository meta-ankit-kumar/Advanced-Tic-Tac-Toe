import './form.css';
import { TextField, Grid, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react';
import { isValidName, handleSubmit, isSubmitButtonDisabled } from './utils';
import { BORDER_COLORS, INVALID_NAME_ERROR } from './constants';

let ignoreFirstTime = true;

const getBorderColor = (name) => {
	if (name.length || ignoreFirstTime) {
		if(isValidName(name, ignoreFirstTime)) {
			return BORDER_COLORS.SUCCESS.description;
		}
		else {
			return BORDER_COLORS.ERROR.description;
		}
	}
	return BORDER_COLORS.ERROR.description;
};

// eslint-disable-next-line react/prop-types
export const Form = ({ name, setName, setCurrentPage}) => {
	const [nameError, setNameError] = useState('');

	useEffect(() => {
		if (isValidName(name, ignoreFirstTime))
			setNameError('');
		else 
			setNameError(INVALID_NAME_ERROR.description);
	}, [name]);

	const handleInput = (event) => {
		setName(event.target.value);
		ignoreFirstTime = false;
	};
	return (
		<div className='form-component'>
			<Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft: '15px'}}>
				<div className='input-field'>
					<TextField className='text-field' onInput={handleInput} variant="filled" placeholder='Your name' color={getBorderColor(name)} inputProps={{ style: { color: 'white', fontSize: '2.5rem'} }} autoFocus focused />
					<p className='errors-section'>{nameError}</p>
				</div>
				<div>
					<Button type='submit' disabled={isSubmitButtonDisabled(name)} onSubmit={() => handleSubmit(name, setCurrentPage)} onClick={() => handleSubmit(name, setCurrentPage)}>
						<ChevronRightIcon sx={{ fontSize: '6rem'}} color={getBorderColor(name)}/>
					</Button>
				</div>
			</Grid>
		</div>		
	);
};