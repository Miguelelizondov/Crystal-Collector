
var wins = 0;
var losses = 0;
var suma = 0;

initialize();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function putRandomNumber(){
    var randomNumber = getRandomInt(19,120);
    
    $("#randomNumber").text(randomNumber);
    return randomNumber;
}
function checking(){
    if(suma === rN){
        reset();
        wins++;
        $("#Wins").text("Wins: "+ wins);
        initialize();
        
      
    }
    else if(suma > rN){
        reset();
        losses++;
        $("#Losses").text("Losses: "+ losses);
        initialize();
    }

}
function reset(){
    suma = 0;
    rN = 0;
    
}

function initialize(){
    nYellow =     getRandomInt(1,12);
    nRed =     getRandomInt(1,12);
    nPurple =    getRandomInt(1,12);
    nBlue =     getRandomInt(1,12);
    rN = putRandomNumber ();

}

$("#blueGem").on("click",function(){
    suma += nBlue;
    $("#totalScore").text(suma);
    checking();
});
$("#yellowGem").on("click",function(){
    suma += nYellow;
    $("#totalScore").text(suma);
    checking();
});
$("#redGem").on("click",function(){
    suma += nRed;
    $("#totalScore").text(suma);
    checking();
});
$("#purpleGem").on("click",function(){
    suma += nPurple;
    $("#totalScore").text(suma);
    checking();
});

