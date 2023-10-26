

var a = document.getElementById('btn');
var b = document.getElementById('btn1');
var c = document.getElementById('btn2');

a.addEventListener('click',one)
function one(){
   if(a.innerText=='click me'){
      a.innerText='clicked';
      a.style.backgroundColor=" #ADD8E6";
   }else if(a.innerText=='clicked'){
      a.innerText='click me';
      a.style.backgroundColor='orange';
   }   
}

b.addEventListener('click',two)
function two(){
   if(b.innerText=='click me'){
      b.innerText='clicked';
      b.style.backgroundColor=" #ADD8E6";
   }else if(b.innerText=='clicked'){
      b.innerText='click me';
      b.style.backgroundColor='orange';
   }
}



c.addEventListener('click',three)

function three(){
   if(c.innerText=='click me'){
      c.innerText='clicked';
      c.style.backgroundColor=" #ADD8E6";
   }else if(c.innerText=='clicked'){
      c.innerText='click me';
      c.style.backgroundColor='orange';
   }
}