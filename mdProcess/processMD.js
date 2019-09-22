import commonmark from "commonmark";

'use strict';
var markdown = require('commonmark');

var mdReader = new markdown.Parser();
var mdWriter = new markdown.HtmlRenderer();

main();

function main() {
    var content = '# demo\nT> some tip\n\nW> some warning\n'
    var content2 = '> some';
    var parsed = mdReader.parse(content);

    parsed = transform(parsed);

    var result = mdWriter.render(parsed);

    console.log(result);
}

function transform(parsed) {
    var walker = parsed.walker();
    var event, node;

    while ((event = walker.next())) {
        node = event.node;
        if (event.entering && node.type === 'Text') {
            if (node.literal.indexOf('T>') === 0) {
                node._parent._classes = ['tip']; // XXX: not possible yet
                node._parent._type = 'BlockQuote';
                node.literal = node.literal.slice(2).trim();
            }
            if (node.literal.indexOf('W>') === 0) {
                // ... same thing for warning
            }
        }
    }

    return parsed;
}
//
//var reader = new commonmark.Parser();
//var writer = new commonmark.HtmlRenderer();
//var parsed = reader.parse("Hello *world*");
//var result = writer.render(parsed);
//console.log(result);

//var reader = new commonmark.Parser({
//    smart: true
//});
//var writer = new commonmark.HtmlRenderer({
//    softbreak: "<br />"
//});
//
//var xmlrenderer = new commonmark.XmlRenderer({
//    sourcepos: true
//});
//var reader = new commonmark.Parser();
//var writer = new commonmark.HtmlRenderer();
//var reader = new commonmark.Parser();
//var writer = new commonmark.HtmlRenderer();
//var parsed = reader.parse("Hello *world*"); // parsed is a 'Node' tree
//// transform parsed if you like...
//var result = writer.render(parsed); // result is a String



//const inputValue = document.getElementById('inputText').value;
//console.log(inputValue);
//var parsed = reader.parse("inputValue"); // parsed is a 'Node' tree
// transform parsed if you like...
//var result = writer.render(parsed);
//
//console.log(reader);
//console.log(writer);
//console.log(parsed);
//console.log(result);
//console.log(xmlrenderer);
//texta.addEventListener("input", function () {
//    console.log("onchange clicked");
//    console.log(result);
//});

//const myDiv = document.createElement('div');
//let divText = document.createTextNode(result);
//console.log(myDiv.appendChild(divText));

//document.getElementById("outputText").innerHTML = result;
//
//const log = document.getElementById('outputText');
//
//var reader = new commonmark.Parser();
//var writer = new commonmark.HtmlRenderer();
//inputText.addEventListener('input', function (e) {
//
//    const iv = "#Hello *world*";
//
//    var parsed = reader.parse(iv); // parsed is a 'Node' tree
//    // transform parsed if you like...
//    var result = writer.render(parsed); // result is a String
//    document.getElementById("outputText").textContent = e.result.value;

//    console.log(inputValue);
//    var parsed = reader.parse("inputValue");
//    console.log(parsed);
//    var result = writer.render(parsed).value;
//
//    console.log("called event");
//    console.log(result);
//       log.textContent = e.result.value;
//});

//
//var walker = parsed.walker();
//var event, node;
// 
//while ((event = walker.next())) {
//  node = event.node;
//  if (event.entering && node.type === 'text') {
//    node.literal = node.literal.toUpperCase();
//  }
//}
