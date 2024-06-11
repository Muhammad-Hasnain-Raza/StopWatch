
let hour = 0 ;
let minute= 0 ;
let second= 0 ;
let milliseconds= 0 ;
let timer;
let interval ;

function start(){
    timer = setInterval(()=>{
        milliseconds++
    if(milliseconds > 100){
        second++
        milliseconds = 0 ;
    }
    if(second > 60){
        minute++
        second = 0 ;
    }
    if(minute > 60){
        hour++
        minut = 0;
    }

document.getElementById("screen").innerHTML =`${hour}:${minute}:${second}:${milliseconds}`
},10)
}

function startStop(){
    clearInterval(timer)
    
}

function reset(){
    
    hour = 0;
    minute = 0;
    second = 0;
    milliseconds = 0;
    document.getElementById("screen").innerHTML = `${hour}:${minute}:${second}:${milliseconds}`
    clearInterval(timer)
}
milliseconds++
if(milliseconds > 100){
    second++
    milliseconds = 0 ;
}
if(second > 60){
    minute++
    second = 0 ;
}
if(minute > 60){
    hour++
    minute = 0;
}
