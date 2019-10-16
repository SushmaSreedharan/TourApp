import React from "react";
import "../hogwarts.css";

function TourTable(props) {
const row = props.tourData.map((tourDataRow,index) => 
<tr> <td><button id="delete-button">Delete</button></td>

<td>{tourDataRow.name}</td>
<td>{tourDataRow.date}</td></tr>);
return (
      <div>
       
        <h1>Tours</h1>
      <table >
      
  <tr><td></td><td id="table-header">Name</td>
    <td>Date</td>
</tr> 


  {row}

    </table>

   </div>
);
}
      
export default TourTable;