for (let i = 0; i < document.querySelectorAll(".product-container").lenght; i++) {
    document.querySelectorAll(".product-container")[i].addEventListener("click", function() {
        document.getElementById('po-main-id').style.display = "block";

    });
}
for (let index = 0; index < document.querySelectorAll(".product-container").length; index++) {
    document.querySelectorAll(".product-container")[index].addEventListener("click", function() {
        document.getElementById("po-main-id").style.display = 'block';
        document.getElementById("po-main-cutter").addEventListener("click", function() {
            document.getElementById("po-main-id").style.display = "none";
        });
        document.getElementById("pd-main-cutter").addEventListener("click", function() {
            document.getElementById("po-main-id").style.display = "none";
        });

    });

}