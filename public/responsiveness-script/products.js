// var olo_element = document.getElementById("over-lay-options")

// for (let index = 0; index < document.querySelectorAll(".product-container").length; index++) {
//     document.querySelectorAll(".product-container")[index].addEventListener("click", function() {
//         olo_element.style.display = "block";
//     });
// }
document.getElementById("checkout-button").addEventListener("click", cart_handler);

function cart_handler() {
    location.href = "/cart/checkout";
}