import React from "react";
import "../hogwarts.css";

function TourTable(props) {
var row = props.tourData.map(function(tourDataRow, i){
return <tr key = {"t" + i} > <td><button id="delete-button" onClick={props.deleteTour.bind(null, i)}>Delete</button></td>
<td>{tourDataRow.name}</td>
<td>{tourDataRow.date}</td></tr>
});

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