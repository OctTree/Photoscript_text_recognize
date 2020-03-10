
// var myLayer = app.activeDocument.activeLayer.textItem.contents;

// function hello_color() {
   
//   var res = myLayer.match(/hello world/ig);
//   if(res.length > 0) {	
// 	for(var i = 0; i < res.length; i ++) {
// 	    change_color(res[i], myLayer);
// 	}
//   }
//   function change_color(matchText, str){
// 	alert(matchText);	
// 	var colorObj = new SolidColor();
// 	colorObj.rgb.hexValue = 777777;
// 	matchText.color = colorObj;
//     alert(matchText.color);
// 	str.replace(/hello world/ig, matchText);
//   }
  
// }
// hello_color();
// alert('OK');
docRef = app.activeDocument
textColor1 = new SolidColor;
textColor1.rgb.red = 255;
textColor1.rgb.green = 0;
textColor1.rgb.blue = 0;

textColor2 = new SolidColor;
textColor2.rgb.red = 0;
textColor2.rgb.green = 0;
textColor2.rgb.blue = 0;

var sampleText = "Hello World";
var textContents = app.activeDocument.layers.getByName('yahoo!'); 
var str = textContents.textItem.contents;
var beforeText;
var afterText;

function match_Text(){
	var matchText = str.match(sampleText);
	var sampleText_len = sampleText.length;
	var len = str.length;
	alert(len);
	alert(sampleText_len);
	if(matchText){
		var n = str.search(sampleText);
		alert(n);
		if(n == 0){
			beforeText = '';
			afterText = str.slice(sampleText_len);
		}
		else{
			beforeText = str.slice(0,n);
			afterText = str.slice(n + sampleText_len);
		}
	}
}

match_Text();
alert(beforeText);
alert(sampleText);
alert(afterText);

textContents.remove();

beforeTextLayer = docRef.artLayers.add();
beforeTextLayer.kind = LayerKind.TEXT;
beforeTextLayer.textItem.contents = beforeText;
beforeTextLayer.textItem.position = Array(100,100);
beforeTextLayer.textItem.size = 60;
beforeTextLayer.textItem.color = textColor2;

newTextLayer = docRef.artLayers.add();
newTextLayer.kind = LayerKind.TEXT;
newTextLayer.textItem.contents = sampleText;
newTextLayer.textItem.position = Array(100,170);
newTextLayer.textItem.size = 60;
newTextLayer.textItem.color = textColor1;

afterTextLayer = docRef.artLayers.add();
afterTextLayer.kind = LayerKind.TEXT;
afterTextLayer.textItem.contents = afterText;
afterTextLayer.textItem.position = Array(100,240);
afterTextLayer.textItem.size = 60;
afterTextLayer.textItem.color = textColor2;
app.activeDocument.mergeVisibleLayers();


// function onOpen() {
// 	DocumentApp.getUi().createMenu('Selection')
// 	  .addItem("Report Selection", 'reportSelection' )
// 	  .addToUi();
//   }
  
//   function reportSelection () {
// 	var doc = DocumentApp.getActiveDocument();
// 	var selection = doc.getSelection();
// 	var ui = DocumentApp.getUi();
  
// 	var report = "Your Selection: ";
  
// 	if (!selection) {
// 	  report += " No current selection ";
// 	}
// 	else {
// 	  var elements = selection.getSelectedElements();
// 	  // Report # elements. For simplicity, assume elements are paragraphs
// 	  report += " Paragraphs selected: " + elements.length + ". ";
// 	  if (elements.length > 1) {
// 	  }
// 	  else {
// 		var element = elements[0].getElement();
// 		var startOffset = elements[0].getStartOffset();      // -1 if whole element
// 		var endOffset = elements[0].getEndOffsetInclusive(); // -1 if whole element
// 		var selectedText = element.asText().getText();       // All text from element
// 		// Is only part of the element selected?
// 		if (elements[0].isPartial())
// 		  selectedText = selectedText.substring(startOffset,endOffset+1);
  
// 		// Google Doc UI "word selection" (double click)
// 		// selects trailing spaces - trim them
// 		selectedText = selectedText.trim();
// 		endOffset = startOffset + selectedText.length - 1;
  
// 		// Now ready to hand off to format, setLinkUrl, etc.
  
// 		report += " Selected text is: '" + selectedText + "', ";
// 		report += " and is " + (elements[0].isPartial() ? "part" : "all") + " of the paragraph."
// 	  }
// 	}
// 	ui.alert( report );
//   }
