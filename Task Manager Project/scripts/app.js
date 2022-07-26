let importantIconClass = "fa-solid fa-star";
let nonImportantIconClass = "fa-regular fa-star";
let isImportant = false;


function toggleImportant() {
    console.log('Icon Clicked');
    
    if (!isImportant) {
        $("#icon-important").removeClass(importantIconClass);//remove non-important icon class
        $("#icon-important").addClass(nonImportantIconClass);//add important icon class
        isImportant = true;
    }
    else{
        $("#icon-important").removeClass(nonImportantIconClass);
        $("#icon-important").addClass(importantIconClass);
        isImportant = false;
    }
}

function saveTask(){
    console.log("Task Saved!");

    let title = $("#txtTitle").val();
    let dueDate = $("#txtDueDate").val();
    let description = $("#txtDescription").val();
    let color = $("#selColor").val();
    let emoji = $("#selEmoji").val();
    let location = $("#txtLocation").val();
    let status = $("#selStatus").val();
    let notifications = $("#chkNotification").prop("checked");

    console.log(title,dueDate,description,color,emoji,location,status,notifications)

}

function hideTask(){
    console.log("Taskbar Hidden");
}



function init() {
    console.log("Task Manager Page!");
    $("#icon-important").click(toggleImportant);
    $("#save-button").click(saveTask);
    $("#hide-task").click(hideTask);
}


window.onload = init;