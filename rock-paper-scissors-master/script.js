


var posibilitys = {
    "rp": "0",
    "pr": "1",
    "ps": "0",
    "sp": "1",
    "rs": "1",
    "sr": "0",
    "ss": "2",
    "rr": "2",
    "pp": "2",
    
};
var playercoice = ""
var botcoice = ""
var combined = ""
var score = parseInt(localStorage.getItem('score'))
if (isNaN(score)) {
    score = 0;
    document.getElementById("score").innerHTML = score;
}


function selected(element){
    if(element == 'paper'){
        playercoice = "p";
    }
    if(element == 'rock'){
        playercoice = "r"; 
    }
    if(element == 'scissor'){
        playercoice = "s";
    }
    document.getElementById("symbolSelect").style.display = "none";
    document.getElementById("symbolSelected").style.display = "flex";
    
    
    
    if (playercoice == "p"){
        document.getElementById("userSelect").style.backgroundImage = "url(images/icon-paper.svg)"
        document.getElementById("userSelect").style.outline = "10px var(--Paper-Gradient) solid";
    }
    if (playercoice == "s"){
        document.getElementById("userSelect").style.backgroundImage = "url(images/icon-scissors.svg)"
        document.getElementById("userSelect").style.outline = "10px var(--Scissors-Gradient) solid";
    }
    if (playercoice == "r"){
        document.getElementById("userSelect").style.backgroundImage = "url(images/icon-rock.svg)"
        document.getElementById("userSelect").style.outline = "10px var(--Rock-Gradient) solid";
    }
    
    botSelect();
    
    
}

async function botSelect(){
    await new Promise(r => setTimeout(r, 1000));
    document.getElementById("botWahlt").innerHTML = "Bot Wahl";
    var rand = Math.floor(Math.random() * 3);
    // scissors
    if (rand < 3){
        botcoice = "s"
    }
    // Paper
    if (rand < 2){
        botcoice = "p"
    }
    // rock
    if (rand < 1){
        botcoice = "r"
    }
    combined =  playercoice + botcoice 
    
    if (botcoice == "p"){
        document.getElementById("botSelect").style.backgroundImage = "url(images/icon-paper.svg)"
        document.getElementById("botSelect").style.outline = "10px var(--Paper-Gradient) solid";
        document.getElementById("botSelect").style.backgroundColor = "white";
    }
    if (botcoice == "s"){
        document.getElementById("botSelect").style.backgroundImage = "url(images/icon-scissors.svg)"
        document.getElementById("botSelect").style.outline = "10px var(--Scissors-Gradient) solid";
        document.getElementById("botSelect").style.backgroundColor = "white";
        
    }
    if (botcoice == "r"){
        document.getElementById("botSelect").style.backgroundImage = "url(images/icon-rock.svg)"
        document.getElementById("botSelect").style.outline = "10px var(--Rock-Gradient) solid";
        document.getElementById("botSelect").style.backgroundColor = "white";
        
    }
    compare();
    
    
}


function compare(){
    var resulte = posibilitys[combined];
    if (resulte == 1){
        document.getElementById("middle").style.display = "flex";
        document.getElementById("resultText").innerHTML = "Du hast Gewonnen";
        score += 1;
        localStorage.setItem('score', score);
        document.getElementById("score").innerHTML = score;
        document.documentElement.style.setProperty("--outline1widthP", "50px");
        document.documentElement.style.setProperty("--outline2widthP", "70px");
    }
    if (resulte == 0){
        document.getElementById("middle").style.display = "flex";
        document.getElementById("resultText").innerHTML = "Du hast Verloren";
        document.documentElement.style.setProperty("--outline1widthB", "50px");
        document.documentElement.style.setProperty("--outline2widthB", "70px");
        if (score <= 0){ return}
        score -= 1;
        localStorage.setItem('score', 0);
        document.getElementById("score").innerHTML = score;

    }
    if (resulte == 2){
        document.getElementById("middle").style.display = "flex";
        document.getElementById("resultText").innerHTML = "Unentschieden";
    }
}


function reload(){
    playercoice = ""
    botcoice = ""
    combined = ""
    document.getElementById("symbolSelect").style.display = "flex";
    document.getElementById("symbolSelected").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("botSelect").style.backgroundImage = "url()"
    document.getElementById("botSelect").style.backgroundColor = "rgba(0, 0, 0, 0.226)"
    document.getElementById("botSelect").style.outline = "none";
    document.documentElement.style.setProperty("--outline1widthP", "0px");
    document.documentElement.style.setProperty("--outline2widthP", "0px");
    document.documentElement.style.setProperty("--outline1widthB", "0px");
    document.documentElement.style.setProperty("--outline2widthB", "0px");
    document.getElementById("botWahlt").innerHTML = "Bot Wählt";


}



function showRules(){
    document.getElementById("rulesOverlay").style.width = "100vmax";
}
function closeRules(){
    document.getElementById("rulesOverlay").style.width = "0";
}