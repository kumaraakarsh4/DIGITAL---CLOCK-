const parent = document.querySelector(".parent")
console.log(parent.children);
console.log(parent.children[1].innerHTML);
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    
}
parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
const dayone = document.querySelector(".day")
console.log(dayone);
const div = document.createElement('div')
console.log(div);
div.className="main"
div.id=Math.round (Math.random()*10+1)
div.setAttribute("title" , "here!Aakarsh")
div.style.backgroundColor = "green"
div.style.padding="12px"
const addtext = document.createTextNode("Hey ! I am Aakarsh")
div.appendChild(addtext)
document.body.appendChildappendChild(div)
function addLanguage(LangName){
   const element =  document.createElement('li');
   element.innerHTML = `${LangName}`
   document.querySelector('.language').
   appendChild(element)
   
}
addLanguage("Java")
addLanguage("Python")
addLanguage("c++")
addLanguage("c#")


// edit of value

const first = document.querySelector("li:nth-child(4)")
console.log(first);
first.innerHTML = "Django"
const second = document.querySelector("li:first-child")
second.outerHTML = "<li> Wordpress </li>"
const third = document.querySelector("li:last-child")
third.remove()