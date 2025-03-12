const mainDiv = document.querySelector(".js-main");
const selectLink = document.querySelector(".js-link").addEventListener("click", ()=>{
    mainDiv.innerHTML =
    `
    <h3 class="customh3">Shorten a long URL link</h3>
    <div class="url">
        <form>
            <label class="label">Input Long URL here</label>
            <input class="inputs" placeholder="https://example.com/my-long-url">
            <button class="submit" type="submit">
                Get your link &#8594
            </button>
        </form>
    </div>
    `
});
const selectQR = document.querySelector(".js-qr").addEventListener("click", ()=>{
    mainDiv.innerHTML = 
    `
    <h3 class="customh3">Create a QR Code</h3>
    <div class="qr">
        <form>
            <label class="label">Input Long URL here</label>
            <input class="inputs" placeholder="https://example.com/my-long-url">
            <button class="submit" type="submit">
                Get your QR &#8594
            </button>
        </form>
    </div>
    `
});