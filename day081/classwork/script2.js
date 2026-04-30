const slides = [
  {
    emoji: "🦁",
    title: "Lion",
    fact: "Lions can sleep up to 20 hours a day!"
  },
  {
    emoji: "🐘",
    title: "Elephant",
    fact: "Elephants can recognize themselves in a mirror."
  },
  {
    emoji: "🐬",
    title: "Dolphin",
    fact: "Dolphins have names for each other using unique sounds."
  },
  {
    emoji: "🦉",
    title: "Owl",
    fact: "Owls can rotate their heads up to 270 degrees."
  },
  {
    emoji: "🐧",
    title: "Penguin",
    fact: "Penguins propose with pebbles!"
  }
];

let current = 0;

function updateSlide() {
  document.getElementById("emoji").textContent = slides[current].emoji;
  document.getElementById("title").textContent = slides[current].title;
  document.getElementById("fact").textContent = slides[current].fact;
  document.getElementById("counter").textContent = `${current + 1} / ${slides.length}`;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
}