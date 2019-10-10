let openSideMenu = document.querySelector('.fa-bars');
openSideMenu.addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '100%';
    // When clicking the hamburger icon for the first time, the side menu appears abruptly. From the second time onwards it shows up from the side. Is there a way to make the menu show up from the side from the first click?
    document.getElementById('side-menu').style.display = 'block';
});

// I want to click on the hamburger icon to close the sidemenu instead of the x button.. Do you know an easy way to do this?
let closeSideMenu = document.querySelector('.btn-close');
closeSideMenu.addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '0';
});


//i want to be able to click on the hamburger menu to open side bar
//I want to be able to click on hamburger again to close side bar


// if($("button").text() == "☰"){
//     $("button").text("✖");
//   }else{        
//     $("button").text("☰");      
//   }