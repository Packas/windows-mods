var box1 = document.getElementById("box1"); 
var box2 = document.getElementById("box2"); 
var box3 = document.getElementById("box3"); 
var box4 = document.getElementById("box4"); 
var swiches = document.getElementById("switches");
var divv = document.getElementById("body2");
const canvas = document.getElementById("ctx");

var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
r.value = 0;
g.value = 0;
b.value = 0;
const ca = ctx.getContext("2d");

var onoff = {
    cpu: true,
    ram: true,
    timeonpc: true,
    fps: true,
    a: document.getElementById("cput"),
    b: document.getElementById("ramt"),
    c: document.getElementById("timepct"),
    d: document.getElementById("fpst")
};

onoff.a.addEventListener("click", () => {
    if(onoff.cpu == true){
        onoff.cpu = false;
    }
    else{
        onoff.cpu = true;
    }
});

onoff.b.addEventListener("click", () => {
    if(onoff.ram == true){
        onoff.ram = false;
    }
    else{
        onoff.ram = true;
    }
});

onoff.c.addEventListener("click", () => {
    if(onoff.timeonpc == true){
        onoff.timeonpc = false;
    }
    else{
        onoff.timeonpc = true;
    }
});

onoff.d.addEventListener("click", () => {
    if(onoff.fps == true){
        onoff.fps = false;
    }
    else{
        onoff.fps = true;
    }
});

window.addEventListener("keydown", (event) => {
    if(event.code == "Escape"){
        returntomainscreen();
    };
    if(event.code == "ShiftRight"){
        returntomainscreen();
    };
});

//Startup
swiches.style.display = "none";

wallpaper.addEventListener("click", () => {
    togglesettingon();
});

function togglesettingon(){
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    divv.style.display = "none";
    showsettings();
};

function showsettings(){
    swiches.style.display = "block";
};

function returntomainscreen(){
    if(onoff.cpu == false){
        box1.style.display = "none";
    }
    else{
        box1.style.display = "block";
    }

    if(onoff.ram == false){
        box2.style.display = "none";
    }
    else{
        box2.style.display = "block";
    }

    if(onoff.timeonpc == false){
        box3.style.display = "none";
    }
    else{
        box3.style.display = "block";
    }

    if(onoff.fps == false){
        box4.style.display = "none";
    }
    else{
        box4.style.display = "block";
    }

    swiches.style.display = "none";
    divv.style.display = "block";
};

setInterval(() => {
    //rgb 
    ca.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ca.globalAlpha = 0.7;
    ca.fillStyle = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
    ca.fillRect(0, 0, window.innerWidth, window.innerHeight);
    box1.style.backgroundColor = "rgba(" + r.value + ", " + g.value + ", " + b.value + ", 0.5)";
    box2.style.backgroundColor = "rgba(" + r.value + ", " + g.value + ", " + b.value + ", 0.5)";
    box3.style.backgroundColor = "rgba(" + r.value + ", " + g.value + ", " + b.value + ", 0.5)";
    box4.style.backgroundColor = "rgba(" + r.value + ", " + g.value + ", " + b.value + ", 0.5)";
}, 10);

setInterval(() =>{
    if(r.value == ""){
        r.value = 0;
    }
    if(g.value == ""){
        g.value = 0;
    }
    if(b.value == ""){
        b.value = 0;
    }
}, 3000);

function blurredr(){
    if(r.value == ""){
        r.value = 0;
    }
};

function blurredg(){
    if(g.value == ""){
        g.value = 0;
    }
}
function blurredb(){
    if(b.value == ""){
        b.value == 0;
    }
}