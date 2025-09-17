function toggle(){
  var menuBox = document.getElementById('nav');    
  if(menuBox.style.display == "flex") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "flex";
  }
}
