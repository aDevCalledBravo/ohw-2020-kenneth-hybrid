    AOS.init();


    function openNav() {
    	document.getElementById("mobile").style.width = "100%";
    	document.getElementById("contact-icons").style.marginLeft = "0";
    	document.getElementById("navUl").style.marginLeft = "0";
    }

    function closeNav() {
    	document.getElementById("mobile").style.width = "0";
    	document.getElementById("contact-icons").style.marginLeft = "300%";
    	document.getElementById("navUl").style.marginLeft = "200%";
    }