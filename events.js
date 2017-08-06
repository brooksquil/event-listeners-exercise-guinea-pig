console.log("Guinea Pig");

// Output target is the output-target element:
let output = document.getElementById("output-target");
console.log(output);

// When any section is clicked the output target text should be "You clicked on the {text of the section} section":


//approaching HTML collection as we did in class demo
let sections = document.getElementsByClassName("article-section");

console.log("sections", sections);

function handleClick(MouseEvent) {
    let sectionText = MouseEvent.target.innerHTML;
    output.innerHTML = "You clicked on the " + sectionText + " section";
}

//loop thru collection to get each sections text output
for (var i = 0; i < sections.length; i++) {

    sections.item(i).addEventListener("click", handleClick);

};

////////////////////////////////////////////////////////
//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header":

let header = document.getElementById("page-header");
console.log("header", header);

//adding event listeners to trigger funnctions which place text in innerHTML
header.addEventListener("mouseover", handleMouseOver);
header.addEventListener("mouseout", handleMouseOut);

function handleMouseOver(event) {
    output.innerHTML = "You moved your mouse over the header";
}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!":

function handleMouseOut(event) {
    output.innerHTML = "You left me!!";
}

// When you type characters into the input field, the output element should mirror the text in the input field:

//using keyup to mirror user entry
let userInput = document.getElementById("keypress-input");
console.log(userInput);
userInput.addEventListener("keyup", function(event) {
    //targeting value of event
    output.innerHTML = event.target.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue:
let thePig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function() {
    thePig.classList.toggle("change-blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger:

document.getElementById("make-large").addEventListener("click", function() {
    thePig.classList.toggle("hulkify");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it:

document.getElementById("add-border").addEventListener("click", function() {
    thePig.classList.toggle("borderNow");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded:

document.getElementById("add-rounding").addEventListener("click", function() {
    thePig.classList.toggle("rounder");
});

// The first section's text should be bold:

document.getElementById("article-section").addEventListener("load", function() {
    for (var i = 0; i < sections.length; i++) {
        sections.classList.toggle("boldNow");

    }

});





// The last section's text should be bold and italicized:


// Make the buttons stop appearing next to each other as inline elements. Change them into block elements: