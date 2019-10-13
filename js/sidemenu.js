let menuIsClosed = true;
let openSideMenu = document.querySelector('.fa-bars');
let sideMenu = document.getElementById('side-menu');

openSideMenu.addEventListener('click', function() {
    if (menuIsClosed) {
        sideMenu.classList.add("menu-is-open");
        menuIsClosed = false;
    } else {
        sideMenu.classList.remove("menu-is-open");
        menuIsClosed = true;
    }
});

// ALTERNATIVE CODE //

// let menuIsClosed = true;
// let openSideMenu = document.querySelector('.fa-bars');
// openSideMenu.addEventListener('click', function() {
//     if (menuIsClosed) {
//         document.getElementById('side-menu').style.width = '50%';
//         menuIsClosed = false;
//     } else {
//         document.getElementById('side-menu').style.width = '0';
//         menuIsClosed = true;
//     }
// });