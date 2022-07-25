let importantIconClass = "fa-solid fa-star";
let nonImportantIconClass = "fa-regular fa-star";
let isImportant = false;


function toggleImportant(){
    console.log('Icon Clicked');
}
    
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

function init(){
    console.log("Task Manager Page!");
    $("#icon-important").click(toggleImportant);
}
$("#icon-important").click(toggleImportant);

window.onload = init;