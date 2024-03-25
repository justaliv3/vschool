document.addEventListener("DOMContentLoaded", function() {
    const square = document.getElementById("square");
  
    square.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "blue";
    });
  
    square.addEventListener("mousedown", function() {
      this.style.backgroundColor = "red";
    });
  
    square.addEventListener("mouseup", function() {
      this.style.backgroundColor = "yellow";
    });
  
    square.addEventListener("dblclick", function() {
      this.style.backgroundColor = "green";
    });
  
    window.addEventListener("wheel", function() {
      square.style.backgroundColor = "orange";
    });
  
    document.addEventListener("keydown", function(event) {
      const key = event.key.toLowerCase();
      if (key === "b") {
        square.style.backgroundColor = "blue";
      } else if (key === "r") {
        square.style.backgroundColor = "red";
      } else if (key === "y") {
        square.style.backgroundColor = "yellow";
      } else if (key === "g") {
        square.style.backgroundColor = "green";
      } else if (key === "o") {
        square.style.backgroundColor = "orange";
      } else if (key === "p") {
        square.style.backgroundColor = "purple";
      }
    });
  });