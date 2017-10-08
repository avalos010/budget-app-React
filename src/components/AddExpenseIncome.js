import React from 'react';

const AddExpenseIncome = (props) => (
	<div>
		<form onSubmit={props.handleAddValue}>
		<select>
			<option> + </option>
			<option> - </option>
		</select>
		<input type="text" name="title" placeholder='Expense/Income'/>
		<input type="number" name="amount" placeholder="Amount"/>
		<input type="submit" value="submit"/>
		<input onClick={props.handleRemoveAll} 
		type="button" value="Reset"/>
		</form>
	</div>

);

export default AddExpenseIncome;