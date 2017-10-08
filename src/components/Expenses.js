import React from 'react';

const Expenses = (props) => (
	<div className="expenses">
		<h3> Expenses </h3> 
		<ul>
		{props.expenseValues.map(obj => {
		return <li key="obj.name">{obj.name}  -${obj.value} 
		<button className="remove-btn"  onClick={e => props.handleRemoveExpense(obj)}>
		Remove</button></li>
		})} 
		</ul>
	</div>
)
export default Expenses;