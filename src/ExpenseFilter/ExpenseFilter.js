  
import React, {useState} from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    var d = new Date();
 const [year,setYear]=useState(d.getFullYear());
  const changeYear = ((event)=>{
    setYear(event.target.value);
     props.onChange(event.target.value);
      //console.log(event.target.value);
  });
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeYear} value={year}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;