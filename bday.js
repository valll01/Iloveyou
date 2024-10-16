const text = "You make my world brighter every day! Wishing you endless happiness and love on your special day. Here's to more moments together, full of joy and laughter. I love you always! 🥰";
const animatedText = document.getElementById("animatedText");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    animatedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Adjust speed of typing animation here
  }
}

window.onload = typeWriter;

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');

    cardContainer.addEventListener('click', () => {
        cardContainer.classList.toggle('flipped');
    });
});

 