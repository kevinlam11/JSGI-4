function update(className) {
  document.body.classList = [className];
}

document.getElementById("redButton").addEventListener("click", function () {
  update("red");
});

document.getElementById("whiteButton").addEventListener("click", function () {
  update("white");
});
