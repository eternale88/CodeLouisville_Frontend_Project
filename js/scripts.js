$(document).ready( () => {
    $("#self-image").hide().show("slow");
}); /*Loads profile image after page load */


/* add color to footer buttons individually apon clicking */
const codeCampButton = document.getElementById("codecamp");
const linkedinButton = document.getElementById("linkedin");
const githubButton = document.getElementById("github");
const codepenButton = document.getElementById("codepen");

codeCampButton.addEventListener("click", () => {
  codeCampButton.style.color = "red";
});

linkedinButton.addEventListener("click", () => {
  linkedinButton.style.color = "yellow";
});

githubButton.addEventListener("click", () => {
  githubButton.style.color = "white";
});

codepenButton.addEventListener("click", () => {
  codepenButton.style.color = "purple";
});
