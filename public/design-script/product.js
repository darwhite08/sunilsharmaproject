for (let i = 0; i < document.querySelectorAll('.product-container').length; i++) {
    if (window.innerWidth <= 662) {
        document.querySelectorAll('.product-container')[i].setAttribute("style", "width:40%; ");
    } else if (window.innerWidth <= 922 && window.innerWidth > 662) {
        document.querySelectorAll('.product-container')[i].setAttribute("style", "width:53%;");
    } else {
        document.querySelectorAll('.product-container')[i].setAttribute("style", " width:22.5%; margin-right:2vw;");
    }
}