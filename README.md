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

## Question 3 

### (b)

![Developer-tool Screenshot](images/markdown.png)

```HTML
<!DOCTYPE html>
<html>

<head>
     <link rel="stylesheet" href="processMD.css"/>
    <title>Parcel</title>
</head>

<body>
    <div id="mdProcessContainer" >
    <h1>Markdown Processor</h1>
    <h2>Type Markdown here</h2>
    <div><textarea id="inputText" >
 </textarea></div>
    <div><button id="convert-btn" type="button" >Convert to HTML</button></div>
    <h2>Rendered HTML here</h2>
    <div id="outputText" rows="4" cols="50">
</div>
</div>
 <script src="processMD.js">
    </script>
</body>
</html>

```

```javaScript
import commonmark from "commonmark";
var convertBtn = document.getElementById("convert-btn");
var mdText = document.getElementById("inputText");
var result="";
var parsed="";
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
    convertBtn.addEventListener("click", function () {
    console.log(mdText.value);
    parsed = reader.parse(mdText.value);
    result = writer.render(parsed);
    let htmlSection = document.getElementById("outputText");
    htmlSection.innerHTML = result;
 
});
```
## Question 4

### (a)

![Developer-tool Screenshot](images/highlight.png)

```javascript
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);
hljs.configure({useBR:true});

import commonmark from "commonmark";
var convertBtn = document.getElementById("convert-btn");
var mdText = document.getElementById("inputText");
var result="";
var parsed="";
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
    convertBtn.addEventListener("click", function () {
    console.log(mdText.value);
    parsed = reader.parse(mdText.value);
    result = writer.render(parsed);
    let htmlSection = document.getElementById("outputText");
   htmlSection.innerHTML = hljs.highlightAuto(result).value;
});
```
### (b)

[Markdown to HTML](http://csweb01.csueastbay.edu/~rg4984/mdProcess/processMD.html)

### (c)
dist/processMD.1effedb3.js.map        1.44 MB     
dist/processMD.1effedb3.js          884.77 KB    
dist/processMD.6a913089.css.map       3.33 KB       
dist/processMD.6a913089.css           1.73 KB    
dist/processMD.b49960ad.css.map         534 B     
dist/processMD.html                     527 B     
dist/processMD.b49960ad.css             235 B     

**Reduce JS file size by:**
1.We can use server side compression to reduce the size of javaScript files.
2.Minify JS(removes unnecessary characters from source code) can be used.
3.Intelligent coding using CSS shorthand.


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