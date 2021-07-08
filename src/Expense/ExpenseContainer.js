import "./ExpenseContainer.css";

function container(list) {
  let month = list.date.toLocaleString("default", { month: "long" });
  let year = list.date.getFullYear();
  let date = list.date.getDate();
  
  return (
    <div className="eachItem">
      <div className="date">
        <h5>{month}</h5>
        <h2>{year}</h2>
        <h1>{date}</h1>
      </div>
      <div className="item">{list.title}</div>
      <div className="item price">${list.price}</div>
    </div>
  );
}


export default container;
