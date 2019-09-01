"use strict";

const text = document.querySelector(".typewritten").textContent;
let i = 0;
let type = "";

document.getElementById("typewriter").innerHTML = "";

function typeWriter() {
    let nextCharacter = text.charAt(i);
    type = type + nextCharacter;
    document.getElementById("typewriter").innerHTML = type;
    i++;
    if (i < text.length) {
        setTimeout(typeWriter, 250);


    }
}

typeWriter();