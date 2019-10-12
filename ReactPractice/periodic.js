import React from "react";
import ReactDOM from "react-dom";



function PeriodicTable(props) {
   debugger;
    
const row = props.chemElements.map((chemDetails,index)=> 
                        <ul id="tableItems">
                        <li>{chemDetails.atomic_number}</li>
                        <li>{chemDetails.name}</li>
                        <li>{chemDetails.symbol}</li>
                        <li>{chemDetails.phase}</li>
                        <li>{chemDetails.year_of_discovery}</li>
                        </ul>);
return (
   <div>
      <ul id = "tableHeader">{props.desiredCols.map((cols)=> <li>{cols}</li>)}</ul>
      <div>{row}</div>
   </div>
);
}
      
export default PeriodicTable;
