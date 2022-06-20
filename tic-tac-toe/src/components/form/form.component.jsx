import './form.css';
import { TextField, Grid, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react';
import { isValidName, handleSubmit, isSubmitButtonDisabled } from './utils';
import { BORDER_COLORS, INVALID_NAME_ERROR } from './constants';


export const Form = () => {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');

	useEffect(() => {
		if (isValidName(name))
			setNameError('');
		else 
			setNameError(INVALID_NAME_ERROR.description);
	}, [name]);

	const getBorderColor = (name) => {
		if (name.length) {
			if(isValidName(name)) {
				return BORDER_COLORS.SUCCESS.description;
			}
			else {
				return BORDER_COLORS.ERROR.description;
			}
		}
		return BORDER_COLORS.SUCCESS.description;
	};
	const handleInput = (event) => {
		setName(event.target.value);
	};
	return (
		<div className='form-component'>
			<Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft: '15px'}}>
				<div className='input-field'>
					<TextField className='text-field' onInput={handleInput} variant="filled" placeholder='Your name' color={getBorderColor(name)} inputProps={{ style: { color: 'white', fontSize: '2.5rem'} }} focused />
					<p className='errors-section'>{nameError}</p>
				</div>
				<div>
					<Button disabled={isSubmitButtonDisabled(name)} onClick={() => handleSubmit(name)}>
						<ChevronRightIcon sx={{ fontSize: '6rem'}} color={getBorderColor(name)}/>
					</Button>
				</div>
			</Grid>
		</div>		
	);
};