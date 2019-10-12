import React from "react";
import "./hogwarts.css";

function TourTable(props) {
    
const row = props.tourData.map((tourDataRow,index) => 
<tr ><td>{tourDataRow.name}</td>
<td>{tourDataRow.date}</td></tr>
                        );
return (
      <div>
        <h1>Tours</h1>
      <table >
  <tr> <td id="table-header">Name</td>
    <td>Date</td></tr> 
 
  {row}

    </table>

   </div>
);
}
      
export default TourTable;