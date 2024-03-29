let AR = document.getElementById("AR");
let EN = document.getElementById("EN");
let text = document.getElementById("title");
let welcome = document.getElementById("welcome");
let aboutus = document.getElementById("about-us");
let abouttext = document.getElementById("about-text");
let contactus = document.getElementById("contact-us");

AR.onclick = () =>{
    // text.innerHTML = "مرحبا بك في موقعنا"
    translate("arabic");
    localStorage.setItem("lang","arabic");
}
EN.onclick = () =>{
    // text.innerHTML = "welcome to our site"
    translate("english");
    localStorage.setItem("lang","english");
}
onload =()=>{
    translate(localStorage.getItem("lang"));
}
function translate(language){
if (language === "arabic"){
    text.innerHTML = "موقع علي";
    welcome.innerHTML = "مرحباً بك في موقعنا";
    aboutus.innerHTML = "حولنا";
    abouttext.innerHTML = "أنا مصمم جرافيك ومصمم مواقع ويب";
    contactus.innerHTML = "اتصل بنا";
}
if (language === "english"){
    text.innerHTML = "AliWeb";
    welcome.innerHTML = " Hi there in our website";
    aboutus.innerHTML = "About Us:";
    abouttext.innerHTML = "I am a Graphic Designer and a Web Designer";
    contactus.innerHTML = "Contact Us";
}
}