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
