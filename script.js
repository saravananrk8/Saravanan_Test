const quotes = [
  "Small consistent steps beat big inconsistent ones.",
  "Done is better than perfect.",
  "Every expert was once a beginner.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Focus on progress, not perfection.",
  "If it scares you a little, it’s probably worth doing.",
  "Discipline beats motivation."
];

const quoteEl = document.getElementById("quote");
const buttonEl = document.getElementById("new-quote");

function showRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[index];
}

// initial quote
showRandomQuote();

// change on button click
buttonEl.addEventListener("click", showRandomQuote);