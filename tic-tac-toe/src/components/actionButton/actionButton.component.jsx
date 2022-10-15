/* eslint-disable react/prop-types */
import { Button } from '@mui/material';

export const ActionButton = ({variant, type, eventHandler, text}) => {
	return (
		<Button variant={variant} color={type} onClick={(event) => eventHandler(event)}>{text}</Button>
	);
};