import React from 'react';
import categories from '../categories';

interface Props{
    onSelectCategory: (category:string) => void
}
const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (
    <div className='w-50 mx-auto pb-3'>
      <select className="form-select" onChange={(event)=> onSelectCategory(event.target.value)}>
        <option value="">All categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
    </div>
    
  )
}

export default ExpenseFilter
