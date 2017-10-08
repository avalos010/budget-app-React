import React, { Component } from 'react';
import Header from './Header'
import Expenses from './Expenses'
import Income from './Income'
import AddExpenseIncome from './AddExpenseIncome'
import Total from './total'

class App extends Component {
  state = {
    expenses: parseInt(0,10),
    income: parseInt(0,10),
    expenseValues: [],
    incomeValues: []
  }
  handleRemoveIncome = (IncomeToRemove) => {
    this.setState((prevState) => ({
      incomeValues: prevState.incomeValues.filter(obj => obj !== IncomeToRemove),
      income: prevState.income - parseInt(IncomeToRemove.value,10)
    }))
  }

  handleRemoveExpense = (ExpenseToRemove) => {
    this.setState((prevState) => ({
      expenseValues: prevState.expenseValues.filter(obj => obj !== ExpenseToRemove),
      expenses: prevState.expenses + parseInt(ExpenseToRemove.value,10)
    }))
  }

  handleRemoveAll = () => {
    this.setState(() => ({
      expenses: 0,
      income: 0,
      expenseValues: [],
      incomeValues: []
    }))
  }
  handleAddValue = (e) => {
  e.preventDefault();
  const operator = e.target[0].value;
  const name = e.target[1].value;
  const value = e.target[2].value;
  if(name === '' || value === '') {
    alert('Dont leave any fields empty!')
  }
  else {
  if(operator === '+') {
    this.setState((prevState) => 
    ({income: prevState.income + parseInt(value,10),
      incomeValues: prevState.incomeValues.concat({value,name})
    }))
    
  }
  else if(operator === '-') {
     this.setState((prevState) => 
    ({expenses: prevState.expenses - parseInt(value,10),
      expenseValues: prevState.expenseValues.concat({value,name})
 }))
   }

   e.target[1].value = '';
   e.target[2].value = '';
  }
}
  render() {
    return (
      <div className="App">
      <Header />
      <Total 
      expenses={this.state.expenses}
      income={this.state.income}
      />
      <AddExpenseIncome 
      handleAddValue={this.handleAddValue}
      handleRemoveAll={this.handleRemoveAll}
      />
      <div className="expenses-income">
      <Expenses 
      handleRemoveExpense={this.handleRemoveExpense}
      expenseValues={this.state.expenseValues}/>
      <Income 
      handleRemoveIncome={this.handleRemoveIncome}
      incomeValues={this.state.incomeValues}/>
      </div></div>
    );
  }
}

export default App;
