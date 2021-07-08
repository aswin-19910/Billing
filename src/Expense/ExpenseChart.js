import Chart from '../ExpenseChart/Chart';
function ExpenseChart (props){
    const yearlyExpense=[
        {label:'JAN' , value:0},
        {label:'FEB' , value:0},
        {label:'MAR' , value:0},
        {label:'APR' , value:0},
        {label:'MAY' , value:0},
        {label:'JUN' , value:0},
        {label:'JUL' , value:0},
        {label:'AUG' , value:0},
        {label:'SEP' , value:0},
        {label:'OCT' , value:0},
        {label:'NOV' , value:0},
        {label:'DEC' , value:0},
    ];

for(let value of props.dataPoint){
   const month=value.date.getMonth();
   yearlyExpense[month].value+=(value.price);
}
    return <Chart data={yearlyExpense}/>
}
export default ExpenseChart