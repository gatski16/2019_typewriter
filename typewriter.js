"use strict";

const text = document.querySelector(".typewritten").textContent;
let i = 0;
let type = "";

document.getElementById("typewriter").textContent = "";

function typeWriter() {
    let nextCharacter = text.charAt(i);
    type = type + nextCharacter;
    document.getElementById("typewriter").textContent = type;
    i++;
    if (i < text.length) {
        setTimeout(typeWriter, 250);
    }
}

typeWriter();