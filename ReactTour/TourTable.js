import React from "react";
import "./hogwarts.css";

function TourTable(props) {
    
const row = props.tourData.map((tourDataRow,index) => 
<tr ><td>{tourDataRow.name}</td>
<td>{tourDataRow.date}</td></tr>
                        );
return (
 
   
      <div>
      <table id="tour-table">
      <tr >
    <th>Name</th>
    <th>Date</th>
   </tr>
  <tr >{row}</tr>

    </table>

   </div>
);
}
      
export default TourTable;