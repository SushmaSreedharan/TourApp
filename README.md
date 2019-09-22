**Student Name**:  Sushma Cheneerkuppum Sreedharan

**NetID**: rg4984

# Homework #4 Solution

## Question 1 

### (a)

Node version: v10.16.3
NPM version: 6.9.0

### (d)

![Developer-tool Screenshot](images/commonmark.png)

## Question 2 

### (c)

![Developer-tool Screenshot](images/parcel.png)

## Question 5

### (a)

![Developer-tool Screenshot](images/reactApp.png)

```javaScript
import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";


ReactDOM.render( <
    h1 > The Periodic Table < /h1>,
    document.getElementById("root")
);
```

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>React App</title>
</head>

<body>

    <div id="root"></div>
    <h2>Brought to you by Sushma Cheneerkuppum sreedharan: rg4984</h2>
    <p>There are 118 chemical elements</p>
    <script src="index.js"></script>
</body>

</html>
```
### (b)

![Developer-tool Screenshot](images/periodicTable.png)

```javaScript
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
   <div>
      <ul id = "tableHeader">{props.desiredCols.map((cols)=> <li>{cols}</li>)}</ul>
      <div>{row}</div>
   </div>
);
}
      
export default PeriodicTable;
```
```CSS
#tableHeader li {
    padding: 5px;
    width: 13%;
}

#tableHeader {
    display: flex;
    list-style-type: none;
}

#tableItems {
    display: flex;
}

#tableItems li {
    padding: 5px;
    list-style-type: none;
    width: 13%;
}
```