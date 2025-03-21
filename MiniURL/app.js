let session;
let mainDiv = "js-main";

function navContent() {
    if (session === undefined) {
        document.querySelector(".nav").innerHTML = 
        `
        <button class="nav-link js-login" href="#">Log In</button>
        <button class="nav-link js-signup" href="#">Sign Up</button>
        <a class="nav-link" href="https://github.com/kum-wh/TinyURL-Clone/blob/main/README.md">Software Documentation</a>
        `
    } else {
        document.querySelector(".nav").innerHTML = 
        `
        <button class="nav-link js-loginout" href="#">Log Out</button>
        <a class="nav-link" href="https://github.com/kum-wh/TinyURL-Clone/blob/main/README.md">Software Documentation</a>
        `
    }
}

function setDisplayUrlMode() {
    const testoldlink = ["test1", "test2", "test3"];
    const testnewlink = ["test1", "test2", "test3"];
    const testcount = [1, 2, 3];
    let divText = ""
    for (let i=0; i < testoldlink.length; i++) {
        divText += 
        `
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" style="background-color: #ff7954;">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Original Link: ${testoldlink[i]}</h5>
                <small class="text-muted">Number of Clicks: ${testcount[i]}</small>
            </div>
            <p class="mb-1">Shorten Link: ${testnewlink[i]}</p>
        </a>  
        `
    }

    const cur = "."+ mainDiv;
    const element = document.querySelector(cur);
    element.classList.add('animate__fadeOutDown')
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
        element.classList.remove('animate__fadeOutDown');
        document.querySelector(".urllist").innerHTML = divText;
        document.querySelector(".myurl").style.display = "block";
        mainDiv = "myurl";
    }, {once:true})
}

function setUrlMode() {
    const cur = "."+ mainDiv;
    const element = document.querySelector(cur);
    element.classList.add('animate__fadeOutDown')
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
        element.classList.remove('animate__fadeOutDown');
        document.querySelector(".js-main").style.display = 'block';
        mainDiv = "js-main";
    }, {once:true})
    // addUrlFormFunc();
}

// function addUrlFormFunc() {
//     document.getElementById("urlForm").addEventListener('submit', async(event) => {
//         event.preventDefault();
//         const data = new FormData(event.target);
//         const response = await sendData("https://swifter.pythonanywhere.com/url", data);
//     })
// }

function setSignMode() {
    const cur = "."+ mainDiv;
    const element = document.querySelector(cur);
    element.classList.add('animate__fadeOutDown')
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
        element.classList.remove('animate__fadeOutDown');
        document.querySelector(".js-signup").style.display = 'block';
        mainDiv = "js-signup";
    }, {once:true})
    addSignUpFunc();
};

function addSignUpFunc() {
    document.getElementById("signupForm").addEventListener('submit', async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const response = await sendData("https://swifter.pythonanywhere.com/signup/", data);
        setUrlMode();
    })
}

function setLoginMode() {
    const cur = "."+ mainDiv;
    const element = document.querySelector(cur);
    element.classList.add('animate__fadeOutDown');
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
        element.classList.remove('animate__fadeOutDown');
        document.querySelector(".js-login").style.display = 'block';
        mainDiv = "js-login";
    }, {once:true})
    addLoginFunc();
};

function addLoginFunc() {
    document.getElementById("loginForm").addEventListener('submit', async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const response = await sendData("https://swifter.pythonanywhere.com/login/", data);
        setUrlMode();
    })
}

async function sendData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });
    const result = await response.json()
    return result;
}