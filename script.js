//DOM
const clickHeading = document.querySelector("#click-heading");
const clickBtn = document.querySelector("#click-btn");
const autoBtn = document.querySelector("#auto-btn");

//Game variables
let wood = 0;
let cost = 100
let woodPerSecond = 0;

//Event listener
clickBtn.addEventListener("click", function() {
    wood += 1;
    clickHeading.innerHTML = `Wood: ${wood}`;
});

autoBtn.addEventListener("click", () => {
    if(wood >= 100) {
        wood -= 100;
        woodPerSecond += 1;
    }

});

//functions
function autoFarm() {
    wood += woodPerSecond
}
//Game Loop
window.setInterval(function () {
    autoFarm();
    clickHeading.innerHTML = `Wood: ${wood}`;
}, 1000);