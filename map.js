let map = document.querySelector(".contacts-button-map");
let popupMap = document.querySelector(".modal-map");
let closeMap = popupMap.querySelector(".modal-close");


map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});