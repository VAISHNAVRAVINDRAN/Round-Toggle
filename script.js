var a=document.querySelector(".plus");
var p=document.querySelector(".person");
var g=document.querySelector(".group");
var c=document.querySelector(".call");
var m=document.querySelector(".minus");
a.addEventListener("click", toggle);
function toggle() {
p.style.top="16%";
g.style.top="27%";
c.style.top="38%";
m.style.display="flex";
}
m.addEventListener("click", toggleoff);
function toggleoff() {
p.style.top="";
g.style.top="";
c.style.top=""; 
m.style.display="none";
}
