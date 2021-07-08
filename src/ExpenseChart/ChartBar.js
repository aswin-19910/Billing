import './ChartBar.css'
function ChartBar(props){
    let fillBar=0;
    if(props.max>0){
    fillBar=Math.round(((props.expense/props.max)*100));}
    console.log(props.label , props.expense,fillBar);
    return(
        <div>
            <div className="label">{props.label}</div>
        <div className="chart_bar">
             <div className="chart_bar_outer">
                <div className="fill" style={{height:fillBar}}/>
             </div>
             
        </div>
        </div>
    )
}
export default ChartBar