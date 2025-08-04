const text = "Ubisoft Game Design Test";
const target = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // typing speed
  }
}
typeWriter();
