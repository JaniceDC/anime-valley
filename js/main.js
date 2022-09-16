const boxOne = document.querySelector(".s1");
const boxTwo = document.querySelector(".s2");
const boxThree = document.querySelector(".s3");
const boxFour = document.querySelector(".s4");

const person = document.querySelector(".person");

const quote = document.querySelector(".quote");
const quoteContainer = document.querySelector(".quoteContainer");
const quoteContainerName = document.querySelector(".quoteContainerName");
const displayBox = document.querySelector(".display");
const displayBoxUl = document.querySelector(".displayUl");

const likeBtn = document.querySelector("#like");
const myLike = () => {
  alert(
    "Good choice! Keep going to see if others tickle your fancy... Reveal your anime at the end!"
  );
};
const dislikeBtn = document.querySelector("#dislike");
const myDislike = () => {
  alert(
    "You are not interested in this anime! Move on and hopefully we can spark your interest..."
  );
};
const showDisplayBtn = document.querySelector("#showDisplay");
const moveOn = document.querySelector(".moveOn");
const goodChoice = document.querySelector(".goodChoice");

const fetchQuote = async () => {
  await fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {
      quoteContainer.innerHTML = data.quote;
      quoteContainerName.innerHTML = data.anime;
    });
};

let reveal = [];

dislikeBtn.addEventListener("click", () => {
  quote.classList.add("next");
});
likeBtn.addEventListener("click", () => {
  textContent = quoteContainerName.textContent;
  reveal.push(textContent);
  console.log(reveal);
});

boxOne.addEventListener("click", () => {
  quote.classList.remove("next");
  quote.classList.add("active");
  fetchQuote();
  boxOne.appendChild(person);
});
boxTwo.addEventListener("click", () => {
  quote.classList.remove("next");
  quote.classList.add("active");
  fetchQuote();
  boxTwo.appendChild(person);
});
boxThree.addEventListener("click", () => {
  quote.classList.remove("next");
  quote.classList.add("active");
  fetchQuote();
  boxThree.appendChild(person);
});
boxFour.addEventListener("click", () => {
  quote.classList.remove("next");
  quote.classList.add("active");
  fetchQuote();
  boxFour.appendChild(person);
});

showDisplayBtn.addEventListener("click", () => {
  console.log(reveal.length);
  if (reveal.length <= 0) {
    displayBox.innerHTML =
      "<p>You have not liked any of the anime quotes. Try again.</p>";
    displayBox.classList.add("active");
  } else {
    reveal.forEach((value, index) => {
      let z = document.createElement("li");
      z.innerHTML = `${value}`;
      displayBoxUl.appendChild(z);
    });

    displayBox.classList.add("active");
  }
});
