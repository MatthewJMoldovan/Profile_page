
// Hide Function
var todd = document.querySelector("#toddDiv");
var phill = document.querySelector("#phillDiv");

function hide(element){
    element.remove();
}

// RequestDown Function
var rqst = document.getElementById("requestNumber").innerHTML;

function requestDown (element){
    rqst--;
    document.getElementById("requestNumber").innerHTML = rqst;
    console.log(document.getElementById("requestNumber").innerHTML)
}

// ConnectUp Function
var connects = document.getElementById("connectionsNumber").innerHTML;

function connectUp(element){
connects ++;
document.getElementById("connectionsNumber").innerHTML = connects;
console.log(document.getElementById("connectionsNumber").innerHTML);
}

//nameChange Function
function nameChange(element){
document.getElementById("userName").innerText = "Sir Awesome"
}