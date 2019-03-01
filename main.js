document.addEventListener('DOMContentLoaded', function() {
   main()
}, false);

function main(){
  showIceCream(promptUser());
}

function promptUser(){
  let input = prompt("Time in seconds") * 1000;
  return input
}

function showIceCream(time){
  setTimeout(function(){document.getElementById("tb").innerHTML = document.getElementById("tb").innerHTML + "<tr id='icecream'><td>Favourite Ice Cream Flavor</td><td>Mint Chocolate Chip</td></tr>"; document.getElementById("container").style.visibility = "visible";},time);
}
