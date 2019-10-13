import React from "react";
import "../hogwarts.css";
import TourTable from "./TourTable";
import tourData from "../tour.json";

class Tours extends React.Component {
    constructor(props) {
        super(props); // Must call
        // Set up state here
    }

    // Renders component based on current state and props
    render() {
        return (
            <div>
                <div><h2>Add tour</h2>
                <form id="add-tour">
                    
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Dates(s):
    <input type="text" name="name" />
  </label>
</form>
                </div>
                <div><TourTable tourData={tourData} /></div>

    </div>
        );
    }
}
export default Tours;