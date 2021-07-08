import React, { useState } from "react";
import Expense from "./Expense";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./ExpenseItem.css";

const DummyExpense= [
  { item: "book", price: 200, date: new Date(2019, 6, 10) },
  { item: "pen", price: 20, date: new Date(2021, 6, 15) },
  { item: "pencil", price: 5, date: new Date(2021, 10, 25) },
  { item: "petrol", price: 150, date: new Date(2021, 11, 25) },
  { item: "pencil", price: 5, date: new Date(2020, 10, 25) },
  { item: "car rent", price: 1500, date: new Date(2020, 11, 25) }
];


function ExpenseItem(props) {
  const [ bills , setBill ] = useState(DummyExpense);
  const [ form , setform ] = useState(false);
  const ChangeListner = (addBill) => {
    setBill((preBill) => {
      return [addBill,...preBill];
    })
  };

  const openForm =() =>{
    setform(true);
    // console.log(`open form`,form);
  };
  const closeForm =() =>{
    setform(false);
  };

  return (
    <div className="layout">
      <div className="input">
        {/* CSS is in Expense container */}
         {!form && <button type="button" className="submit" onClick={openForm}>Add New Expense</button>} 
         {form && <ExpenseForm onNew={ChangeListner} onClose={closeForm}/>}
      </div>
     
      <Expense bill={bills} />
       
    </div>
  )
}

export default ExpenseItem;
