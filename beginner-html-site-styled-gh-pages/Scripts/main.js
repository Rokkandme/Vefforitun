const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;}

/*document.querySelector("img").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/


  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/pp.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};