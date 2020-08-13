    AOS.init(); /*Refers to the Animate on Scroll Library for homepage*/


    function openNav() {
        document.getElementById("menu-icon").style.display = "none";
    	document.getElementById("close-menu").style.display = "block";
        document.getElementById("navUl").style.display = "grid";
    }

    function closeNav() {
    	document.getElementById("menu-icon").style.display = "block";
        document.getElementById("close-menu").style.display = "none";
        document.getElementById("navUl").style.display = "none";
    }