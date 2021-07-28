let Projects=document.getElementById("Projects");
let About=document.getElementById("About");
let Skills=document.getElementById("Skills");
let Contact=document.getElementById("Contact");
let innerbar=document.getElementsByClassName("innerbar");
let dash =document.getElementsByClassName("dash")[0];
let inputhead =document.getElementsByClassName("inputhead");
let Name=document.getElementById("Name")
let Email=document.getElementById("Email")
let Message=document.getElementById("Message")
let switchbtn=document.getElementById("switchbtn")
let switchbox=document.getElementById("switchbox")
let form =document.getElementsByTagName("form")[0];


var firebaseConfig = {
    apiKey: "AIzaSyB9pcJ-AVbXxKXPJ_sredOiwcffFRtxAXw",
    authDomain: "portfolio-99e39.firebaseapp.com",
    databaseURL: "https://portfolio-99e39-default-rtdb.firebaseio.com",
    projectId: "portfolio-99e39",
    storageBucket: "portfolio-99e39.appspot.com",
    messagingSenderId: "845584493595",
    appId: "1:845584493595:web:0e2b7b98c5b2ffb6f95cbe",
    measurementId: "G-ZL4S0WCSDH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var contactRef=firebase.database().ref().child("contactForm");

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    if(Name.value.trim().length!==0&&(Email.value.includes('@')&&Email.value.includes('.com'))&&Message.value.trim().length!==0){
        var newcontactRef=contactRef.push();
        newcontactRef.set({
        Name:Name.value,
        Email:Email.value,
        Message:Message.value
    })
    console.log("kam kar gya")
    Name.value="";
    Email.value="";
    Message.value="";
    alert("form submitted successfully");}
    else{
        alert("Fill the form first");
    }


})


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
    inputhead[0].style.top="-110px";
})
Name.addEventListener("blur",()=>{
    if(Name.value.trim().length===0){inputhead[0].style.top="-55px";}
    
})
Email.addEventListener("focus",()=>{
    inputhead[1].style.top="-110px";
})
Email.addEventListener("blur",()=>{
    if(Name.value.trim().length===0){inputhead[1].style.top="-55px";}
    
})
Message.addEventListener("focus",()=>{
    inputhead[2].style.top="-110px";
})
Message.addEventListener("blur",()=>{
    if(Name.value.trim().length===0){inputhead[2].style.top="-55px";}
    
})


About.addEventListener("click",()=>{window.scrollTo(0,0);  });
Projects.addEventListener("click",()=>{window.scrollTo(0,1438);});
Skills.addEventListener("click",()=>{window.scrollTo(0,847);});
Contact.addEventListener("click",()=>{window.scrollTo(0,2149);});

function offset(el) {
    var rect = el.getBoundingClientRect();
    // console.log({ top: rect.top , left: rect.left});
    return { top: rect.top , left: rect.left};
}



let animationbool=true;
setInterval(()=>{

    switchbox.style.left=`${window.screen.availWidth-166}px`;

if(scrollY<1431&&scrollY>=788){
    const obj = offset(document.getElementById("Acheivementsp"));
    dash.style.left= `${obj.left-7}px`;
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
    const obj = offset(document.getElementById("aboutp"));
    
    dash.style.left= `${obj.left-7}px`;
    dash.style.width= "50px";
}
if(scrollY<2140&&scrollY>=1431){
    const obj = offset(document.getElementById("projectsp"));
    dash.style.left= `${obj.left-7}px`;
    dash.style.width= "65px";
}
if(scrollY>=2140){
    const obj = offset(document.getElementById("contactmep"));
    dash.style.left= `${obj.left-7}px`;
    dash.style.width= "90px";
}

},200)


switchbtn.addEventListener("click",()=>{
    Array.from( document.getElementsByClassName("aboutsection")).forEach(element=>{element.classList.toggle("whiteabout");});
    Array.from( document.getElementsByClassName("aboutheading")).forEach(element=>{element.classList.toggle("blackheading");});
    Array.from( document.getElementsByClassName("swiper-slide")).forEach(element=>{element.classList.toggle("blackswiper");});
    Array.from( document.getElementsByClassName("projecthead")).forEach(element=>{element.classList.toggle("blackheading");});
    document.getElementsByClassName("navsubstitute")[0].classList.toggle("whitenav");
    document.getElementsByClassName("imagesection")[0].classList.toggle("blackimagesection");
    document.getElementsByClassName("aboutcontent")[0].classList.toggle("blackimagesection");
    document.getElementsByClassName("skillbox")[0].classList.toggle("blackimagesection");
    document.getElementsByClassName("contactbox")[0].classList.toggle("blackimagesection");
    document.getElementById("navbar").classList.toggle("whitenav");
    dash.classList.toggle("blackdash");
})