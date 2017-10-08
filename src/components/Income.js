import React from 'react';

const Income = (props) => (
 <div className="income">
 	<h3> Income </h3>
 	<ul> 
 	{props.incomeValues.map(obj => {
		return <li key="obj.name">{obj.name}   +${obj.value}
		<button className="remove-btn" onClick={e => props.handleRemoveIncome(obj)}>
		Remove</button>
		</li>
		})} 

 	</ul>
 </div>
);

export default Income;