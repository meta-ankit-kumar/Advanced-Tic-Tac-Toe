import './cell.css';
export const Cell = ({
	// eslint-disable-next-line react/prop-types
	id, text
}) => {
	console.log('In cell component', id, text);
	return (
		<div className='item'>{text}{id}</div>
	);
};
