//your JS code here. If required.
setInterval(()=>{
let now = new Date();
let currentTime = now.toLocaleString();

document.getElementById("timer").textContent = currentTime;
	
},1000)
