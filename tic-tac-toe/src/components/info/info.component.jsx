/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const Info = ({ currentTurn, X, O, numberToSymbolMapping }) => {
	return (
		<div style={{textAlign: 'center'}}>
			<p>Current Turn: <span style={{color: 'green', fontWeight: '500'}}>{numberToSymbolMapping[currentTurn] === 'X' ? X : O}</span></p>
			<p><span style={{color: 'yellow'}}>X: </span>{X}</p>
			<p><span style={{color: 'yellow'}}>O: </span>{O}</p>
		</div>
	);
};