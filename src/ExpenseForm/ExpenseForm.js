import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const itemAdder = (event) => {
    setTitle(event.target.value);
  };
  const [amnt, setAmnt] = useState("");
  const amntAdder = (event) => {
    setAmnt(event.target.value);
  };
  const [date, setDate] = useState("");
  const dateAdder = (event) => {
    setDate(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();
    const ExpenseData = {
      item: title,
      date: new Date(date),
      price: +amnt,
    };
    setDate("");
    setAmnt("");
    setTitle("");
    //  console.log(ExpenseData);
    props.onNew(ExpenseData);
  };

  return (
    <form onSubmit={Submit}>
      <input className="items" value={title} type="text" onChange={itemAdder} />
      <input
        className="amount"
        type="number"
        min="10"
        step="1"
        value={amnt}
        onChange={amntAdder}
      />
      <input
        type="date"
        min="2019-06-10"
        max="2022-06-10"
        value={date}
        onChange={dateAdder}
      />
      <button className="submit" type="button" onClick={props.onClose}>
        Cancel
      </button>
      <button className="submit" type="submit">
        Add Expense
      </button>
    </form>
  );
}
export default ExpenseForm;
