/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

/*
// Show/hide text information for people
function showText(ID) {
    var x = document.getElementById(ID);

  if (x.style.display === "none" || x.style.display === '') {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}*/