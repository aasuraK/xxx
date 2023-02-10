console.log("hey");
//console.dir(document);
//document.title = 123;
console.log(document.doctype);
console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerHTML = '<h3>Enjoy</h3>';
// get element by class name
let b = document.getElementsByClassName('list-group-item');
console.log(b);
b[1].textContent = "2nd";
let a = document.querySelector('.list-group-item:nth-child(2)');
a.style.backgroundColor = "green";
let submit = document.querySelector("input[type='submit']");
submit.value = "SEND"
//let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display = "none";
var c = document.querySelectorAll('.list-group-item');
c[1].style.color = "lightgreen";
var odd = document.querySelectorAll("li:nth-child(odd)");
for(var i =0; i<odd.length;i++){
    odd[i].style.backgroundColor = "grey";

}