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
                <div><TourTable tourData={tourData} /></div>
    </div>
        );
    }
}
export default Tours;