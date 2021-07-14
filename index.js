let projectsp=document.getElementById("projectsp");
let aboutp=document.getElementById("aboutp");
let tttimg=document.getElementById("tttimg");
let ctimg=document.getElementById("ctimg");
let aboutttt=document.getElementsByClassName("aboutttt")[0];
let aboutct=document.getElementsByClassName("aboutct")[0];
var abouttttbool=false;
var aboutctbool=false;
var aboutfsbool=false;
tttimg.addEventListener("mouseenter",()=>{
    if(!abouttttbool){aboutttt.setAttribute("style",`height: 500px;`);}
    abouttttbool=true;
    console.log(abouttttbool);
});
aboutttt.addEventListener("mouseleave",()=>{
    if(abouttttbool){aboutttt.setAttribute("style",`height: 0;`);}
    setTimeout(()=>{abouttttbool=false;},200);
    console.log(abouttttbool);
});
ctimg.addEventListener("mouseenter",()=>{
    if(!aboutctbool){aboutct.setAttribute("style",`height: 500px;padding:15px;`);}
    aboutctbool=true;
    console.log(aboutctbool);
});
aboutct.addEventListener("mouseleave",()=>{
    if(aboutctbool){aboutct.setAttribute("style",`height: 0;padding:0;`);}
    setTimeout(()=>{aboutctbool=false;},200);
    console.log(aboutctbool);
});
aboutp.addEventListener("click",()=>{window.scrollTo(0,0)})
projectsp.addEventListener("click",()=>{window.scrollTo(0,847)})