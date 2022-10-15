import './cell.css';

const setChoice = (id, text, setUserChoice, symbol) => {
	if (text.length) return;
	setUserChoice({id, text: symbol.toUpperCase()});
};

const getStyleClass = (text, winning, readOnly) => {
	if (winning && text.length) return 'item filled winning';
	if (text.length || readOnly) return 'item filled';
	return 'item empty';
};

export const Cell = ({
	// eslint-disable-next-line react/prop-types
	id, text, setUserChoice, symbol, winning, readOnly
}) => {
	return (
		<div onClick={() => !readOnly && setChoice(id, text, setUserChoice, symbol)} className={getStyleClass(text, winning, readOnly)}>{text}</div>
	);
};
