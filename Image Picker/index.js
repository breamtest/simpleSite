
// SET UP FILE UPLOAD
const image = document.querySelector("img");
const input = document.getElementById("image");
const clear = document.getElementById("clear");

input.addEventListener("change", ()=>{
    image.src = URL.createObjectURL(input.files[0]);
});

//CLEAR THE FILE INPUT 

clear.addEventListener("click", ()=>{
    input.value = '';
    image.setAttribute("src", "./images/img.png");
});

//GENERATING PAGE TIME AND DATE
var date = new Date();
var time = date.getHours()+":"+date.getMinutes();
document.getElementById("timeNow").innerHTML = time;


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[date.getDay()];
var today = day+", "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
document.getElementById("dateToday").innerHTML= today;

//FOOTER YEAR
document.getElementById("footerYear").innerHTML = date.getFullYear();

setTimeout(() => {
    document.location.reload();
}, 60000);