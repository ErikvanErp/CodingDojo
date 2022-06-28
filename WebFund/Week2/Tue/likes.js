var numLikes = [9,12,9];
var eLikes = [];

for (var i=0; i < 3; i++){
    eLikes.push(document.getElementById('numlikes' + (i + 1)));
}

function increase(cardNum){
    var i = cardNum - 1;
    numLikes[i]++;
    eLikes[i].innerText = numLikes[i] + ' like(s)';

    return;
}
