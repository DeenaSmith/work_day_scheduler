
// Shows CURRENT date
var fullDate = new Date()
console.log(fullDate);

 
//convert month to 2 digits
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
 
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

$('#currentDay').text(fullDate);



// Save Buttons

$('#nineAmSave').click(function(){
    var enterTask = $('#input9');
    var storedTask = enterTask.val();

    window.localStorage.setItem("tasks", storedTask)
    console.log($('#input9').val())
    console.log($('#input9').data())
})