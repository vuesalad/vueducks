import './style.css'
// Complete SortableJS (with all plugins)
import Sortable from 'sortablejs/modular/sortable.esm.js';


document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!2</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

let el = document.getElementById('items');
for(let i = 1; i <= 12; i++) {
  let div = document.createElement('div');
  div.textContent = i;
  el.appendChild(div);
}

var sortable = Sortable.create(el);

/* var svdaction =  document.querySelector("#actionmenu");  */
var svdchild =  document.querySelector("#svd-child"); 

function makeAction(telement) {
  
  console.log (telement);

  var tdiv = document.createElement("div");

  tdiv.style.position = "absolute" ;
  tdiv.style.left = "0em" ;
  tdiv.style.top = "-2em" ;
  tdiv.style["background-color"]= "blue" ;
  tdiv.innerHTML = "I am actionmenu"
  telement.appendChild(tdiv);
} 

svdchild.addEventListener('click', event => {
  makeAction(event.target);
});
/*
svdaction.addEventListener('click', event => {
  makeAction(event.target);
});
*/

/*
svdaction.style.position = "absolute" ;
svdaction.style.left = "0em" ;
svdaction.style.top = "-2em" ;
svdaction.style["background-color"]= "blue" ;

console.log(svdaction)
*/

/**
 * 
 
var svdchild =  document.querySelector("#svd-child");
svdaction.style.position = "absolute" ;
svdaction.style.left = "0em" ;
svdaction.style.top = "-2em" ;
svdaction.style["background-color"]= "blue" ;

console.log(svdaction)
*/

