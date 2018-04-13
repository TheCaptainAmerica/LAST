function visitPage2() {
        window.location='file:///Users/jonax/Documents/Web100/Final%20Project/CreditPortal2.html';
}

function visitPage3() {
        window.location='file:///Users/jonax/Documents/Web100/Final%20Project/CreditPortal3.html';
}


$(document).ready(function() {
  $('#b4').on("click", function(i) {
    var g100 = $('#g100').val();
    $('#thegreeting').text("Hello " + g100 + "! How are you today?");
    $('#thegreeting').fadeIn(3000);
    // $('#myGreeting').animate({left: '250px'});
    console.log(i);
  });
});
