let increment = 0;
let drops = "";


while (increment < 100) {
    let randoHundo = Math.floor(Math.random()*100) + 1;
    let randoFiver = Math.floor(Math.random()*5) + 2;
    increment += randoFiver;

    drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
    <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
    <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
}

document.querySelector(".front-row").innerHTML = drops;