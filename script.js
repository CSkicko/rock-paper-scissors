var player = {
    selection: 0, //r, p, s pick
    won: true,
    wins: 0,
    draws: 0,
    losses: 0
}










let pick = prompt("Type r, p or s to pick rock, paper or scissors:").toLowerCase();

if(pick=="r"){
    player.selection = 0;
} else if(pick=="p"){
    player.selection = 1;
} else{
    player.selection = 2;
}


// random number between 0 and 2 for the computer
const compRandNumber = Math.trunc(Math.random() * 3);

