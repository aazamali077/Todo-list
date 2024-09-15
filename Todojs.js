const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // span.innerHTML = "<img src = \"icons/crossbtn.png\">";
        li.appendChild(span); 
    }
    inputBox.value = "";
    SaveData(); 
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }

    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false)   


function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function ShowTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        AddTask();
    }
});
ShowTask();