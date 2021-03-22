let content = document.getElementById("content");
let add = document.getElementById("add");
let list = document.getElementById("list");

function addItem() {
    
    
    content.value = content.value.trim();
    //Cleaning up the white space
    
    
    //If the user input is not empty --> Create list of items with each entry
     if (content.value) {
		
        //creating new list item
        let li = document.createElement("li");

        //collecting the user input by input-tag
        li.innerText = content.value;

        //adding list item to the unordered list
        list.appendChild(li);

        // Clearing the text field
        content.value = "";
    
    //(Else) If the user input is empty --> Alert pop-up message
     } else {
		alert("Text space should be filled!");
     } 
}

add.addEventListener("click", addItem);