const btn=document.getElementById("btn");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const input=document.getElementById("input");
const rang=document.getElementById("rang");
const son=document.getElementById("son");



btn.addEventListener("click",()=>{
  if(input.value.trim().length<1){
    alert("Raqam kirit:")
  }else{
    son.textContent=input.value;
  }
  
})


plus.addEventListener("click",()=>{
  plus.style.backgroundColor="green";
  son.textContent=+son.textContent+1;
})



rang.addEventListener("input",()=>{
  son.style.color=rang.value;
})