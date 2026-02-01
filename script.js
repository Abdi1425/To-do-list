//Adding of itrms
let items = [];
let task;
document.getElementById("add-btn").onclick = function getItems(){
task = document.getElementById("todo-input").value
items.push(task);
toDoLIst(items);
}
function toDoLIst(items){
    document.getElementById("todo-list").innerHTML = items.join("<br>");
document.getElementById("todo-input").value = "";
}
//Deletiion part
document.getElementById("delet-btn").onclick = function removeItems(){
    items.pop();
    toDoLIst(items);
}
