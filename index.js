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
        
        if(prompt("write your name again","naam likhiye yaha")==Name.value){
            if(confirm("pakka apka naam ye hai")){
                confirm("mein nahi manta")
                    alert("maan gaya sahab ! form submitted ");
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
                
                
            }
            else{
                alert("jhooth nahi bolna chahiye");
            }
           
        }
        else{
            alert("jhooth bole kavva kaate");
        }
        
    }
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

let particleColor="#ffffff";
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
    document.getElementById("particles-js").classList.toggle("particles-js-dark");
    dash.classList.toggle("blackdash");
    if(particleColor==="#ffffff"){
        particleColor="#000000";
    }
    else{
        particleColor="#ffffff";
    }
    particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: {
            type: "circle",
            stroke: { width: 0, color: particleColor },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "remove" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });

})







  
  //particle.js
  
    particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: {
            type: "circle",
            stroke: { width: 0, color: particleColor },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "remove" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
  
  