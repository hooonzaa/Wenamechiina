const List = []
function ToDoList() {

const InputToDo =  document.getElementById("InputToDo").value

List.push(InputToDo)
const tasktext= List.join('<br>')

document.getElementById("result").innerHTML = tasktext


deleteButton.onclick = function(){
    deleteItem(InputToDo);
};

}