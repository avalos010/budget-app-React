import React from 'react';

const Total = (props) => (
	<div className="total"> 
	<h2> TOTAL: ${props.income + props.expenses}</h2>
	</div>
);

export default Total;