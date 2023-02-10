console.log("dd");
console.dir(document);
var items = document.getElementsByClassName("list-group-item-new");
console.log(items[0].innerHTML);
var items = document.getElementById("items");
var newItem = items.getElementsByTagName("li")[4];
console.log(newItem.innerHTML);
