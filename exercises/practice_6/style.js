"use strict";

function btntext() {
    var inputValue = document.getElementById("wordInput").value;
    document.getElementById("result").innerText = inputValue;
}

function backbutton() {
    document.getElementById("result").style.cssText = " ";
}

function btnClick1() {
    document.getElementById("result").style.cssText = "font-family: DotGothic16; color: red; font-size: 20px";
}

function btnClick2() {
    document.getElementById("result").style.cssText = "font-family: Chokokutai; color: blue; font-size: 30px";
}

function btnClick3() {
    document.getElementById("result").style.cssText = "font-family: Shizuru; color: yellow; font-size: 40px";

}

function btnClick4() {
    document.getElementById("result").style.cssText = "font-family: Rampart One; color: green; font-size: 50px";

}