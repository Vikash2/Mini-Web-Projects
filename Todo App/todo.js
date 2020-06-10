// alert("Connected");

/** Adding text element in js  */
// var h = document.createElement("h1");
// var myValue = document.createTextNode("Hello World!");
// h.appendChild(myValue);
// document.querySelector("h1").appendChild(h);

var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetAll);

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  var textnode = document.createTextNode(item);

  if (item === "") {
    // return false;
    //TODO: Add a p tag and assign a value of "Enter your TODO"
    var p = document.createElement("p");
    var inputValue = document.createTextNode("Enter your TODO");
    p.appendChild(inputValue);
    document.querySelector("h1").appendChild(p);
  } else {
    // create li
    li = document.createElement("li");

    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");

    // create label
    var label = document.createElement("label");
    label.setAttribute("for", "item"); // Optional Line

    // Adding these to web
    // ul.appendChild(label); // Not Understood
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = "visual";
    }, 4);
    input.value = "";
  }
}
function removeItem() {
  //   console.log("Remove Button Clicked");
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}
function resetAll() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0]) {
      ul.removeChild(li[index]);
    }
  }
}
