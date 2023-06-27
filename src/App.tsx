import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import './App.css'

function App(){
  
  const [selectedCategory,setSelectedcategory] = useState('');
  const [expenses,setExpenses] = useState([
    {id:1, description:'aaa', amount:10, category:'Utilities'},
    {id:2, description:'a', amount:10, category:'Utilities'},
    {id:3, description:'aa', amount:10, category:'Utilities'},
    {id:4, description:'aaaa', amount:10, category:'Utilities'}
  ]);

  const visibleExpenses = selectedCategory?expenses.filter((e)=>e.category===selectedCategory):expenses;

  return (
    <div className="bgcolor mh-100">
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses,{...expense,id:expenses.length+1}])}></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category)=> setSelectedcategory(category)}></ExpenseFilter>
      </div>
     <ExpenseList 
     expenses={visibleExpenses} 
     onDelete={(id)=> setExpenses(expenses.filter(e=>e.id!==id))}></ExpenseList>
    </div>
    
  );
  
}
export default App;