var clicked_times_tbs = 0;
document.getElementById("tb-search-bar").addEventListener("click", tb_search_handler);

function tb_search_handler() {
    document.getElementById("tb-div-search").style.cssText = `
    display:block;
    position:absolute;
    top:100%;
    left:0%;
    width:100%;
    background-color:white;
    `;
    clicked_times_tbs += 1;
    if (clicked_times_tbs % 2 == 0) {
        document.getElementById("tb-div-search").style.display = 'none';
    }
}

document.getElementById('tb-menu-slider').addEventListener("click", tb_ms_handler)

function tb_ms_handler() {
    document.getElementById("tb-menu").style.display = "block";

}
document.getElementById("tbm-cutter").addEventListener("click", tbmc_handler);

function tbmc_handler() {
    document.getElementById("tb-menu").style.display = "none";
}