 let sec = 59;
 const timerId = setInterval(function() {
    sec -=1;
    document.getElementById("timer").innerHTML = sec;
    console.log(sec);
    if (sec === 0){
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    }
 }, 1000);
