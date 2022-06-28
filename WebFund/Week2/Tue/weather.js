function dismiss(e){
    e.parentNode.remove();
}


// On load: read the temperatures that are already displayed on the // page into two arrays: high and low
var scale = "C";
var highs = [];
var lows = [];

var eHighs = document.querySelectorAll(".high");
var highs;
for(var i=0; i<eHighs.length; i++){
    highs[i] = eHighs[i].innerText.slice(0,-1);
}
var eLows = document.querySelectorAll(".low");
var lows;
for(var i=0; i<eLows.length; i++){
    lows[i] = eLows[i].innerText.slice(0,-1);
}

// if a new scale is selected (C or F)
// convert the diplayed temperatures
function convertTemp(e){
    var newscale = e.value[1];
    console.log(newscale);
    if(newscale == scale){
        return;
    }
    for(var i=0; i<highs.length; i++){
        highs[i] = convert(highs[i], newscale);
        lows[i] = convert(lows[i], newscale);
    }
    scale = newscale;

    displayTemps();
    return;
}
// display the temperatures contained in highs and lows array
function displayTemps(){
    for(var i=0; i<eHighs.length; i++){
        eHighs[i].innerText = Math.round(highs[i]) + "°";
    }
    for(var i=0; i<eLows.length; i++){
        eLows[i].innerText = Math.round(lows[i]) + "°";
    }
}

// convert a temperature from C to F or from F to C
// newscale is the new temperature scale
function convert(temp, newscale){
    var newtemp = temp;
    if (newscale == "F"){
        newtemp = (temp * 9/5) + 32;
    }
    else if (newscale == "C"){
        newtemp = (temp - 32) * 5/9;
    }
    return newtemp;
}