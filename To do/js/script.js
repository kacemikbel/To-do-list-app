let tasklist = [];
const newTask = document.getElementById('newTask');
const list = document.getElementById('list');

function addTask() {
    const taskAdd = newTask.value;
    if (taskAdd.trim() !== "") {
        tasklist.push(taskAdd);
        showList();
        newTask.value = '';
        newTask.focus();
    }
}

function showList() {
    list.innerHTML = createList();
}

function createList() {
    let ul = '<ul class="list-disc pl-5">';
    tasklist.forEach((task, index) => {
        ul += `<li class="flex justify-between items-center mt-2">${task} <button onclick="removeTask(${index})" class="btn-remove text-red-500"><i class="fa fa-remove"></i></button></li>`;
    });
    return ul + '</ul>';
}

function removeTask(index) {
    tasklist.splice(index, 1);
    showList();
}

document.getElementById('newTask').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});