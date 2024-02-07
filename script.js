// function updateTime() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     document.getElementById("hours").textContent = hours;
//     document.getElementById("minutes").textContent = minutes;
//     document.getElementById("seconds").textContent = seconds;
// }

// // Update time every second
// setInterval(()=>, 1000);

// // Initial call to display time immediately
// updateTime();

let hours = document.getElementById('hours');
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(()=>{

    var currentTime = new Date();

     hours.innerHTML = currentTime.getHours();
     minutes.innerHTML = currentTime.getMinutes();
     seconds.innerHTML = currentTime.getSeconds();

},1000);