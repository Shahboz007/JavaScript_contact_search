// Get input element
const filterInput = document.querySelector("#filterInput");

// Add event listener
filterInput.addEventListener("keyup", filterName);

function filterName() {
  //Get value of input
  let filterValue = document.querySelector("#filterInput").value.toUpperCase();

  // Get names url
  let ul = document.querySelector("#names");
  // Get lis from ul
  let li = ul.querySelectorAll("li.collection-item");

  // Look though collection-item lis
  for(let i=0; i<li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {  
      li[i].style.display = "none";
    }
  }
  
}

