// Get the popup content
var modal = document.getElementById("myLogin");

// Get the login button that opens the popup
var btn = document.getElementById("loginbtn");

// Get the <span> element that closes the pop up
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the pop up 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the pop up
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the pop up, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}