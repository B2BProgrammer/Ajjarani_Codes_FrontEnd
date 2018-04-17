CSS is a language that describes the style of an HTML document.

CSS describes how HTML elements should be displayed

h1 {     // Selector  .. this will select all the h1 elements in DOM
    color: white;    // Property :Value;
    text-align: center;  // Property :Value;
}

Need to know
1) All the properties allowed in CSS
2) All the correct allowed values for properties



- HTML only gets the data displayed with some logic
What CSS does ?
1)Correct Coloring of data
2) Layout,placement, font, design .. t
3) Effects are all taken care from CSS3
C

What is CSS made up of 
1) Selector
2) Property : Value

----------------------------------------------------------------------------------------------
Slectors :
1) 
#elementName : using this we can select the required element with the following name

#para1 {}
<p id="para1">

2) 
p.center {}
<p class="center">

i.e <p> element, having class value as "center"


3) Grouping different elements together 
h1, h2, p {
}

-------------------------------------------------------------------------------------------------
Linking StyleSheet or CSS to HTML
1) External : <link rel="stylesheet" type="text/css" href="cssTestingFile.css">
2) Interanl :  <style> </style>
3) Inline  : <h1 style="color:blue;margin-left:30px;">

cascading order/ priorty of execution

Inline style (inside an HTML element)
External and internal style sheets (in the head section)
Browser default
-------------------------------------------------------------------------------------------------

CSS background properties:

background-color: lightblue;
 background-image: url("paper.gif");
background-repeat
background-attachment
background-position



** Very imprtant in selection of image & color combination
-----------------
                               IMPORTANT PROPERTIES OF CSS
CSS background properties:
CSS Borders for elements
CSS Margins for
CSS Padding : For generating space around element inside teh container
CSS Height/width : for element's height & width inside teh container
CSS Box model
CSS Outline : 	
CSS Text : properties of how text has to be displayed
CSS font : 
         generic family - a group of font families with a similar look (like "Serif" or "Monospace")
	     font family - a specific font family (like "Times New Roman" or "Arial")
CSS Icons
CSS Links


CSS Display : most imporant for controlling layout
 property specifies if/how an element is displayed.
 
 
 
 
 new features and properties in CSS3?
Box model
New Web fonts
Rounded corners
Border Images
Box Shadows, Text Shadows
New Color schemes (RGBA)
Transform property
New Pseudo-classes
Multi-column layout
New Gradients
 
 
 Examples of block-level elements:

<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>

