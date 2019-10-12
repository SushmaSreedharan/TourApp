import React from "react";
import tourData from "./tour.json";

function TourTable(props) {
    
const row = props.tourData.map((tourData,index)=> 
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>{tourData.name}</td>
    <td>{tourData.date}</td>
  
  </tr>

</table>
                        // <ul id="tableItems">
                        // <li>{tourData.name}</li>
                        // <li>{tourData.date}</li>
                        // <li>{chemDetails.symbol}</li>
                        // <li>{chemDetails.phase}</li>
                        // <li>{chemDetails.year_of_discovery}</li>
                        // </ul>
                        );
return (
   <div>
      {/* <ul id = "tableHeader">{props.desiredCols.map((cols)=> <li>{cols}</li>)}</ul> */}
      <div>{row}</div>
   </div>
);
}
      
export default TourTable;