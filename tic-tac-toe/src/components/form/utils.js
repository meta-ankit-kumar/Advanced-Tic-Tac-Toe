export const handleSubmit = (name) => {
	console.log(
		'In Handle submit', name
	);
};

export const isSubmitButtonDisabled = (name) => {
	if (!isValidName(name) || !name.length)
		return true;
	return false;
};

export const isValidName = (name) => {
	return /[A-Za-z ]$/.test(name);
};