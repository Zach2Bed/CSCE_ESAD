
var todoItem = document.getElementById("addItem"); 
var ListObj = document.getElementById("todo-list"); 
var addItem = document.getElementById("add-item-button"); 
              
function NewListItem(){
    const li = document.createElement("li"); 
    var inputValue = document.getElementById("addItem").value; 

    var text = document.createTextNode(inputValue); 

    li.appendChild(text); 
    
    //change this so it is not annoying
    if(inputValue == ''){
        alert("Please enter text into the textbox"); 
    }
    else {
        ListObj.appendChild(li); 
    }
    todoItem.value = ""; 
}

