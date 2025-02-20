const catButton = document.querySelector(".cat-button span");
const parent = catButton.parentElement;
let isDragging = false;

catButton.addEventListener("mousedown", (e) => {
  isDragging = true;
});
document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    parent.style.margin = 0;
    parent.style.position = "absolute";

    parent.style.left = e.clientX + "px";
    parent.style.top = e.clientY + "px";
  }
});
