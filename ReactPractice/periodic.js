import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";

function PeriodicTable(props) {
            const row = props.chemElements.map((chemDetails,index)=> 
                                               <ul id="tableItems">
      
    <li>{chemDetails.atomic_number}</li>
    <li>{chemDetails.name}</li>
    <li>{chemDetails.symbol}</li>
    <li>{chemDetails.phase}</li>
    <li>{chemDetails.year_of_discovery}</li>
       
    </ul>);
    return (
                                               
      <div id="tableHeaderContainer">
      <ul id = "tableHeader">{props.desiredCols.map((cols)=> <li>{cols}</li>)}
      </ul>
      <div id="tableContentContainer">{row}</div>
</div>

    );
}
      
export default PeriodicTable;
