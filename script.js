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

const compRandNumber = Math.trunc(Math.random() * 3);

if (player.selection=="r" && compRandNumber=="p"){
    result="lose";
} elseif( player.selection=="r" && compRandNumber=="s"){
    player.won=true;
} elseif( player.selection=="s" && compRandNumber=="r"){
    result="lose";
} elseif( player.selection=="s" && compRandNumber=="p"){
    result="win";
} elseif( player.selection=="p" && compRandNumber=="s"){
    result="lose";
} elseif( player.selection=="p" && compRandNumber=="r"){
    result="win";
}