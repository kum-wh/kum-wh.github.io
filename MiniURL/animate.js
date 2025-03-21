let i = 0;
let j = 0;
let k = true;
let state = 0;
let func;

const header = document.getElementById("js-animate");

const txt = [
    "https://example.com/this-is-too-long",
    "Shorten It",
    "https://example.com/way-too-complex", 
    "Convert It",
    "URL Shortener"
]

setTimeout(typeWriter, 3800);

function typeWriter() {
    if (k) {
        if (i < txt[j].length) {
            header.innerHTML += txt[j].charAt(i);
            i++;
            func = setTimeout(typeWriter, 60); 
        } else {
            k = false;
            if (j === 4) {
                clearTimeout(func);
            } else {
                setTimeout(typeWriter, 1000);
            }
        }
    } else {
        if (i > 0) {
            i--;
            header.innerHTML = txt[j].slice(0,i);
            if (i === 0) {
                header.innerHTML = txt[j+1][0];
            }
            setTimeout(typeWriter, 60);
        } else {
            j++;
            i++;
            k = true;
            setTimeout(typeWriter, 100); 
        }
    }
}