"use strict";

// Getting all elements
let quote = document.querySelector(".quote");
let quoteAuthor = document.querySelector(".name");
let soundBtn = document.querySelector(".sound");
let copyBtn = document.querySelector(".copy");
let newQuote = document.querySelector(".new-quote");

// my api key
let apiKey = "XYAu9/19zb44QvyBt+iiDg==gAYIGm1IbISDeYhV";

//quote function
async function randomQuote() {
  newQuote.innerHTML = "Quote Loading...";
  let response = await fetch("https://api.api-ninjas.com/v1/quotes?category=", {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  console.log(response);
  let data = await response.json();
  console.log(data[0].author);
  quote.innerHTML = data[0].quote;
  quoteAuthor.innerHTML = data[0].author;

  newQuote.innerHTML = "New Quote";
}

// sound speaking function
soundBtn.addEventListener("click", () => {
  let speaking = new SpeechSynthesisUtterance(
    `${quote.innerHTML} by ${quoteAuthor.innerHTML}`
  );
  speechSynthesis.speak(speaking);
  console.log(speaking);
});

// copy function
copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(quote.innerHTML);
  alert("Text copied");
});

newQuote.addEventListener("click", randomQuote);
