
function editProfile(){
    var userName = document.getElementById("username");
    userName.innerText = 'Any Other Name';
}

function removeRequest(e){
    document.getElementById("request-counter").innerText--;    
    e.parentNode.remove();
}

function acceptRequest(){
    var counter = document.getElementById("connections-counter").innerText;
    counter++;
    if (counter > 500) {
        counter = "500+";
    }
    document.getElementById("connections-counter").innerText = counter;    
}
