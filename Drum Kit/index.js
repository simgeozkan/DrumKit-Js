let buttonArray = document.querySelectorAll(".drum");

for (let btn of buttonArray) {
  // butonları dinliyor

  btn.addEventListener("click", function () {
    var letter = btn.innerHTML;

    makeSound(letter);

    buttonAnimation(letter);
  });
}

//keypress i dinliyor
document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

debugger;

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    default:
      console.log("hata...");
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
