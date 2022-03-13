


$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm a"));



// Color change based on time

function colorChange() {
    var currentHour = moment().hour();
    console.log(currentHour)
    $('.target-hour').each(function () {
        var eachHour = $(this).attr('id');
        console.log(eachHour)

        if (eachHour < currentHour ) {
            $(this).addClass('past');
        } else if (
            eachHour == currentHour 
        ) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else if (eachHour > currentHour ){
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        
});
}

colorChange();



// Checks local storage to display
function loadTasks() {
    var savedTasks9am = localStorage.getItem("tasks9am");
    var savedTasks10am = localStorage.getItem("tasks10am");
    var savedTasks11am = localStorage.getItem("tasks11am");
    var savedTasks12pm = localStorage.getItem("tasks12pm");
    var savedTasks1pm = localStorage.getItem("tasks1pm");
    var savedTasks2pm = localStorage.getItem("tasks2pm");
    var savedTasks3pm = localStorage.getItem("tasks3pm");
    var savedTasks4pm = localStorage.getItem("tasks4pm");
    var savedTasks5pm = localStorage.getItem("tasks5pm");


    $('#09').attr('value', savedTasks9am);
    $('#10').attr('value', savedTasks10am);
    $('#11').attr('value', savedTasks11am);
    $('#12').attr('value', savedTasks12pm);
    $('#13').attr('value', savedTasks1pm);
    $('#14').attr('value', savedTasks2pm);
    $('#15').attr('value', savedTasks3pm);
    $('#16').attr('value', savedTasks4pm);
    $('#17').attr('value', savedTasks5pm);
}
loadTasks();




// Save Buttons

$('#nineAmSave').click(function () {
    var enterTask = $('#09');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks9am", storedTask)

});



$('#tenAmSave').click(function () {
    var enterTask = $('#10');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks10am", storedTask)

});



$('#elevenAmSave').click(function () {
    var enterTask = $('#11');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks11am", storedTask)

});



$('#twelvePmSave').click(function () {
    var enterTask = $('#12');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks12pm", storedTask)

});



$('#onePmSave').click(function () {
    var enterTask = $('#13');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks1pm", storedTask)

});



$('#twoPmSave').click(function () {
    var enterTask = $('#14');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks2pm", storedTask)

});



$('#threePmSave').click(function () {
    var enterTask = $('#15');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks3pm", storedTask)

});



$('#fourPmSave').click(function () {
    var enterTask = $('#16');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks4pm", storedTask)

});



$('#fivePmSave').click(function () {
    var enterTask = $('#17');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks5pm", storedTask)

});