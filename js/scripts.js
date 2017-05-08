$(document).ready( () => {
    $("#self-image").css("display", "none").fadeIn(1600);
}); /*Fades profile img in slowly on page load, must hide first with.css() in
order to fade in, and does the same for photo gallery below */

$(document).ready( () => {
  $("#gallery img").css("display", "none").fadeIn(1600);
});

/* add color to footer buttons individually apon clicking */
const codeCampButton = document.getElementById("codecamp");
const linkedinButton = document.getElementById("linkedin");
const githubButton = document.getElementById("github");
const codepenButton = document.getElementById("codepen");



codeCampButton.addEventListener("click", () => {
  codeCampButton.style.color = "gold";
});




linkedinButton.addEventListener("click", () => {
  linkedinButton.style.color = "yellow";
});

githubButton.addEventListener("click", () => {
  githubButton.style.color = "turquoise";
});

codepenButton.addEventListener("click", () => {
  codepenButton.style.color = "purple";
});
