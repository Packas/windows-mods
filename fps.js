var fps = require('fps')
var ticker = fps({
    every: 100  // update every 100 frames
})
 
setInterval(function() {
  ticker.tick()
}, 1000 / 60)
 
var element = document.getElementById('fps')
ticker.on('data', function(framerate) {
  document.getElementById("fps").innerHTML = "FPS: " + (framerate).toFixed(2);
})