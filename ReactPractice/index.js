import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";
import PeriodicTable from "./periodic.js";

let cols = ["atomic_number", "name", "symbol", "phase", "year_of_discovery"];

let contents = < div >
    <h2>Brought to you by Sushma Cheneerkuppum sreedharan: rg4984</h2>
    <p>There are 118 chemical elements</p>
        <PeriodicTable chemElements = {chemElements} desiredCols = {cols}/> < /div > ;

ReactDOM.render(contents, document.getElementById("root"));
