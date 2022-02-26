function side_nav() {
    var x = document.getElementById("sb-user");
    var y = document.getElementById("sb-nav");
    x.style.display = 'block';
    if (x.style.display === 'block') {
        y.style.display = "block"
    } else if (x.style.display === 'block' && y.style.display === "block") {
        x.style.display = 'none';
        y.style.display = 'none';
    }
}