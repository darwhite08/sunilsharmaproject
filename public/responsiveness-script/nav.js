var clicked_times = 0;
document.getElementById("tb-search-bar").addEventListener("click", function() {
    document.getElementById("tb-div-search").style.cssText = `
    display:block;
    position:absolute;
    top:100%;
    left:0%;
    width:100%;
    background-color:white;
    `;
    clicked_times += 1;
    if (clicked_times % 2 == 0) {
        document.getElementById("tb-div-search").style.display = 'none';
    }
    console.log(clicked_times);
});