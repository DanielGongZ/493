$(document).ready( function() {
    console.log("Ready!");
    document.getElementById("returnToMain").addEventListener("click", redirectToMain);


});


function redirectToMain() {
    window.location.href = "main_page.html";
}