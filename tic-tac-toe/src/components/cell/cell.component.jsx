import './cell.css';

const setChoice = (id, text, setUserChoice, symbol) => {
	if (text.length) return;
	setUserChoice({id, text: symbol.toUpperCase()});
};

const getStyleClass = (text) => {
	if (!text.length)
		return 'item empty';
	return 'item filled';
};

export const Cell = ({
	// eslint-disable-next-line react/prop-types
	id, text, setUserChoice, symbol
}) => {
	return (
		<div onClick={() => setChoice(id, text, setUserChoice, symbol)} className={getStyleClass(text)}>{text}</div>
	);
};
