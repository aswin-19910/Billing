
import "./Expense.css";
import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart'
function Module_one(props) {
  
 const [year ,setYear]=useState('2021');
  const selectedYear = (selected)=>{
   setYear(selected);
  }
  const filteredBill= props.bill.filter( expense =>{
    return expense.date.getFullYear() == year
  })
 // console.log(filteredBill)

  return (
    <div>
      <div className="calender">
       <ExpensesFilter onChange={selectedYear}/>
       <ExpenseChart dataPoint={filteredBill}/>
       <ExpenseList item={filteredBill}></ExpenseList>
      </div>
    </div>
  );
}
export default Module_one;
