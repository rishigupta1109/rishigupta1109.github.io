let Projects=document.getElementById("Projects");
let About=document.getElementById("About");
let Skills=document.getElementById("Skills");
let innerbar=document.getElementsByClassName("innerbar");
let dash =document.getElementsByClassName("dash")[0];
let inputhead =document.getElementsByClassName("inputhead");
let Name=document.getElementById("Name")
let Email=document.getElementById("Email")
let Message=document.getElementById("Message")

inputhead[0].addEventListener("click",()=>{
    Name.focus();
})
inputhead[1].addEventListener("click",()=>{
    Email.focus();
})
inputhead[2].addEventListener("click",()=>{
    Message.focus();
})

Name.addEventListener("focus",()=>{
    inputhead[0].style.top="-100px";
})
Name.addEventListener("blur",()=>{
    if(Name.value.trim().length===0){inputhead[0].style.top="-55px";}
    
})
Email.addEventListener("focus",()=>{
    inputhead[1].style.top="-100px";
})
Email.addEventListener("blur",()=>{
    if(Name.value.trim().length===0){inputhead[1].style.top="-55px";}
    
})
Message.addEventListener("focus",()=>{
    inputhead[2].style.top="-100px";
})
Message.addEventListener("blur",()=>{
    if(Name.value.trim().length===0){inputhead[2].style.top="-55px";}
    
})


About.addEventListener("click",()=>{window.scrollTo(0,0);  dash.style.left= "265px";dash.style.width= "50px";});
Projects.addEventListener("click",()=>{window.scrollTo(0,1438);dash.style.left= "540px";dash.style.width= "65px";});
Skills.addEventListener("click",()=>{window.scrollTo(0,847);dash.style.left= "400px";dash.style.width= "47px";});

let animationbool=true;
setInterval(()=>{
if(scrollY<1431&&scrollY>=788){
    dash.style.left= "400px";
    dash.style.width= "47px";
   
    if(animationbool){
    innerbar[0].animate([{width:"0px"},{width:"80%"}],{duration: 1000,
        fill:"forwards",
        iterations: "1"});
    innerbar[1].animate([{width:"0px"},{width:"70%"}],{duration: 1000,
        fill:"forwards",
        iterations: "1"});
    innerbar[2].animate([{width:"0px"},{width:"65%"}],{duration: 1000,
        fill:"forwards",
        iterations: "1"});
    innerbar[3].animate([{width:"0px"},{width:"70%"}],{duration: 1000,
        fill:"forwards",
        iterations: "1"});
   
    animationbool=false;
}}
if(scrollY<788&&scrollY>=0){
    dash.style.left= "265px";
    dash.style.width= "50px";
}
if(scrollY<2500&&scrollY>=1431){
    dash.style.left= "540px";
    dash.style.width= "65px";
}

},1000)

