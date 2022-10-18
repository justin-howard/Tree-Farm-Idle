//DOM
const clickHeading = document.querySelector("#click-heading");
const clickBtn = document.querySelector("#click-btn");

//Game variables
let wood = 0;

//Event listener
clickBtn.addEventListener("click", function() {
    wood += 1;
    clickHeading.innerHTML = `Wood: ${wood}`;
});