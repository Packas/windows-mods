var box1 = document.getElementById("box1"); 
var box2 = document.getElementById("box2"); 
var box3 = document.getElementById("box3"); 
var box4 = document.getElementById("box4"); 
var swiches = document.getElementById("switches");
var divv = document.getElementById("body2")

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
    window.addEventListener("keyup", (event) => {
        if(event.key = "Escape"){
            returntomainscreen();
        }
    })
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