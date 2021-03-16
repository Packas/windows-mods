const os = require('os-utils');
const { ipcRenderer } = require('electron');

var ctxrem = document.getElementById("ctx");
var wallpaper = document.getElementById("divv");

const c = ctx.getContext("2d");

var background = true;

c.globalAlpha = 0.7;
c.fillStyle = "rgb(0, 0, 0)";
c.fillRect(0, 0, window.innerWidth, window.innerHeight);

setInterval(function(){
    var date = new Date().toLocaleTimeString();
    if(date == "8:45:00 AM"){
        const myNotification = new Notification('Period One Starts In 5 Minutes!', {
            body: 'Windows Mods'
          }) 
    }
    if(date == "9:35:00 AM"){
        const myNotification = new Notification('Period Two Starts In 5 Minutes!', {
            body: 'Windows Mods'
          }) 
    }
    if(date == "10:55:00 AM"){
        const myNotification = new Notification('Period Three Starts In 5 Minutes!', {
            body: 'Windows Mods'
          }) 
    }

    if(date == "11:45:00 AM"){
        const myNotification = new Notification('Period Four Starts In 5 Minutes!', {
            body: 'Windows Mods'
          }) 
    }

    if(date == "1:25:00 PM"){
        const myNotification = new Notification('Period Five Starts In 5 Minutes!', {
            body: 'Windows Mods'
          }) 
    }
    if(date == "2:15:00 PM"){
        const myNotification = new Notification('Period Six Starts In 5 Minutes!', {
            body: 'Windows Mods'
          }) 
    }

    os.cpuUsage((v) => {
        document.getElementById("cpu").innerHTML = "CPU: " + (v * 100).toFixed(2) + "%";
        document.getElementById("ram").innerHTML = "RAM: " + (((os.freememPercentage() * 100) - 100) * -1).toFixed(2) + "%";
    });
}, 500);

var timer = 0;
document.getElementById("timepc").innerHTML = 0 + " mintutes on PC";

setInterval(() => {
    timer++;
    document.getElementById("timepc").innerHTML = timer + " mintutes on PC";
}, 60000)

var background = true;
window.addEventListener("keyup", (e) => {
    if(e.code == "ShiftRight"){
        if (background == true){
            ipcRenderer.send('set-ignore-mouse-events', true, { forward: true })
            wallpaper.style.display = "none";
            ctxrem.style.display = "none";
            background = false;
        }
        else{
            ipcRenderer.send('set-ignore-mouse-events', false)
            wallpaper.style.display = "block"
            ctxrem.style.display = "block";
            background = true;
        };
    }
});