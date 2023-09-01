document.querySelector(".btn").addEventListener("click", () => {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var result = "";
    
    function output() {
    
    if (randomNumber1 > randomNumber2) {
      result = "🚩Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
      result = "🚩Player 2 wins!";
    } else {
      result = "Draw!";
    }
    return result;
  }

  //DOM manipulation
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
  document.querySelector("h1").innerHTML = output();
});
