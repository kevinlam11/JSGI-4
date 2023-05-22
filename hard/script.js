function updateBodyClass(className) {
  document.body.classList = [className];
}

document.getElementById("redButton").addEventListener("click", function () {
  updateBodyClass("red-background");
});

document.getElementById("whiteButton").addEventListener("click", function () {
  updateBodyClass("white-background");
});
