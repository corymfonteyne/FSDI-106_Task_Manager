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
    
    let important = $("#icon-important");
    let title = $("#txtTitle").val();
    let dueDate = $("#txtDueDate").val();
    let description = $("#txtDescription").val();
    let color = $("#selColor").val();
    let emoji = $("#selEmoji").val();
    let location = $("#txtLocation").val();
    let status = $("#selStatus").val();
    let notifications = $("#chkNotification").prop("checked");
    
    let newTask = new Task(isImportant, title, dueDate, description, color, emoji, location, status, notifications);
    //send the task to the server
    $.ajax({
        type: "POST",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(newTask),
        contentType: "application/json",
        
        success: function(res){
            console.log("Server says", res);
            displayTask(newTask);   
        },
        error: function(errorDetails){
            console.log("Error saving details", errorDetails);
        }            
    });

    console.log(newTask);
}

function clearTask(){
    console.log("Task Cleared!");

    let important = $("#icon-important").val("");
    let title = $("#txtTitle").val("");
    let dueDate = $("#txtDueDate").val("");
    let description = $("#txtDescription").val("");
    let color = $("#selColor").val("");
    let emoji = $("#selEmoji").val("");
    let location = $("#txtLocation").val("");
    let status = $("#selStatus").val("");
    let notifications = $("#chkNotification").val("");
}
    
function displayTask(newTask){
    let syntax = 
    `<div class = "task" style="border: 2px solid red;">
        <i class="fa-regular fa-star"></i>

        <div class = "info">
            <h2>${newTask.title}</h2>
            <h3>${newTask.description}</h3>
        </div>

        <label class = "date">${newTask.dueDate}</label>

        <label class = "color">${newTask.color}</label>

        <label class = "location">${newTask.location}</label>

        <label class = "emoji">${newTask.emoji}</label>

        <label class = "status">${newTask.status}</label>

        <label class = "notifications">${newTask.notifications}</label>

        
    </div>`;
    
    $("#pendingTasks").append(syntax);
}

function testRequest(){
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/",
        success: function(res){
            console.log("Server says", res);
        },
        error: function (errorDetails){
            console.log("Error", errorDetails);
        }
    })
}

function hideTask(){
    console.log("Taskbar Hidden");
}

function fetchTasks() {
    //GET https://fsdiapi.azurewebsites.net/api/tasks
    //console log the response from the server
    $.ajax({
        type: "GET",
        url: "https:fsdiapi.azurewebsites.net/api/tasks",
        success: function (res){
            console.log("Server says", res);
            let tasks = JSON.parse(res);
            for (let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                if (task.name == "Cory") {
                    displayTask(task);

                }

                
            }
        },
        error: function (errorDetails){
            console.log("Error retreiving tasks", errorDetails);
        }
    });
}



function init() {
    console.log("Task Manager Page!");
    $("#icon-important").click(toggleImportant);
    $("#save-button").click(saveTask);
    $("#hide-task").click(hideTask);
    fetchTasks();
}


window.onload = init;