// imperative approach

let clickCount = 0;
let lastClickTime = 0;

console.log("Script loaded - non-reactive-2");
const button = document.getElementById("btn-1");
button!.addEventListener("click", () => {
    clickCount++;
    console.log("click count: ", clickCount);
    if (clickCount === 1) {
        lastClickTime = new Date().getTime();
    } else if (clickCount === 2) {
        if (new Date().getTime() - lastClickTime < 5000) {
            console.log("double click in less than 5 seconds!");
        }
        clickCount = 0; // reset click count
    }
});