
// Shows CURRENT date
var fullDate = new Date()
console.log(fullDate);

 
//convert month to 2 digits
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
 
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

$('#currentDay').text(fullDate);


// Checks local storage to display
function loadTasks() {
    var savedTasks9am = localStorage.getItem("tasks9am");
    var savedTasks10am = localStorage.getItem("tasks10am");
    var savedTasks11am = localStorage.getItem("tasks11am");
    var savedTasks12pm = localStorage.getItem("tasks12pm");
    var savedTasks1pm = localStorage.getItem("tasks1pm");
    var savedTasks2pm = localStorage.getItem("tasks2pm");
    var savedTasks3pm = localStorage.getItem("tasks3pm");
    var savedTasks4m = localStorage.getItem("tasks4pm");
    var savedTasks5m = localStorage.getItem("tasks5pm");
    console.log(savedTasks9am)
    console.log(savedTasks10am)
}
loadTasks();




// Save Buttons

$('#nineAmSave').click(function(){
    var enterTask = $('#input9');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks9am", storedTask)

    });



$('#tenAmSave').click(function(){
    var enterTask = $('#input10');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks10am", storedTask)

    });



$('#elevenAmSave').click(function(){
    var enterTask = $('#input11');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks11am", storedTask)

    });



$('#twelvePmSave').click(function(){
    var enterTask = $('#input12');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks12am", storedTask)

    });



$('#onePmSave').click(function(){
    var enterTask = $('#input1');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks1pm", storedTask)

    });



$('#twoPmSave').click(function(){
    var enterTask = $('#input2');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks2pm", storedTask)

    });



$('#threePmSave').click(function(){
    var enterTask = $('#input3');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks3pm", storedTask)

    });



$('#fourPmSave').click(function(){
    var enterTask = $('#input4');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks4pm", storedTask)

    });



$('#tenAmSave').click(function(){
    var enterTask = $('#input10');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks5pm", storedTask)

    });