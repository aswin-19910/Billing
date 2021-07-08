import ExpenseContainer from "./ExpenseContainer";
import './ExpenseList.css'
const ExpenseList=(props)=>{
    if(props.item.length ===0)
    {
        return <h2>Found No Item</h2>
    }
    
    return (
        <div>        { 
            props.item.map((things,index) => (
              <ExpenseContainer
                //need to add a key inorder to avoid whole refreshment in array
                key={index}
                title={things.item}
                date={things.date}
                price={things.price}
              />
            )
            )
        }
        </div>

    )
   
}

export default ExpenseList