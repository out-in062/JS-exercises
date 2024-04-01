"use strict";

function post() {
    let nickname = document.getElementById("nickname").value;
    let content = document.getElementById("postContent").value;
    
    let postElement = document.createElement("div");
    let message = document.createElement("p");
    message.textContent = nickname + ": " + content;
    postElement.appendChild(message);
    
    let postsContainer = document.getElementById("posts");
    postsContainer.appendChild(postElement);
    
    document.getElementById("nickname").value = " ";
    document.getElementById("postContent").value = " ";
}