import { PAGE_NAME } from '../../shared/constants';

export const handleSubmit = (name, setCurrentPage, setName, ignoreFirstTime) => {
	ignoreFirstTime.value = true;
	setName(name);
	if (setCurrentPage)
		setCurrentPage(PAGE_NAME.SELECTION);
	
};

export const isSubmitButtonDisabled = (name) => {
	if (!isValidName(name) || !name.length)
		return true;
	return false;
};

export const isValidName = (name, ignoreFirstTime) => {
	if (ignoreFirstTime) return true;
	return /[A-Za-z ]$/.test(name);
};