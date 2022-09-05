// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();

setInterval(() => {
    

    let a = new Date();
    let date;
    let time;
let day;
    
    date  =   '<br>DATE: ' + a.toLocaleDateString()
    time =   '<br>TIME: '+ a.getHours() + ':'+  a.getMinutes() + ':' + a.getSeconds()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     day = '<br> DAY:'+weekday[a.getDay()];
    
    document.getElementById('clock').innerHTML = date + '' + time + '' + day
    
    }, );
const Country = reqire('country-state-city').Country
console.log(Country.getallCo)