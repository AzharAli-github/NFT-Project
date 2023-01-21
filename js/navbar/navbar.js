// Code for Dark and Light Mode for all body
let darkButton = document.querySelector('.darkMode');
let moon = document.querySelector('.fa-moon')
var x = true
darkButton.addEventListener("click", () => {
    if (x == true) {
        document.body.classList.add('body');
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');
        x = false;
    } else {
        document.body.classList.remove('body');
        moon.classList.add('fa-moon');
        moon.classList.remove('fa-sun');
        x = true;
    }
});

//  Code for the Notification Icon In the Navbar

let bellButton = document.querySelector('.bellButton');
let notifyDiv = document.querySelector('#notifyDiv');
var y = true;
bellButton.addEventListener("click", () => {
    if (y == true) {
        notifyDiv.classList.add('notifyDiv');
        y = false;
    } else {
        notifyDiv.classList.remove('notifyDiv')
        y = true;
    }
});


// Code fot the Avatar Icon In the Navbar

let avatarIcon = document.querySelector('#avatarIcon');
let navAvatar = document.querySelector('#navAvatar');
var z = true;
avatarIcon.addEventListener('click', () => {
    if (z == true) {
        navAvatar.classList.add('navAvatar');
        z = false;
    } else {
        navAvatar.classList.remove('navAvatar')
        z = true;
    }
})