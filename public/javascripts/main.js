const list = [
  "Whoever can guess closest to the current time without looking at a clock",
  "Whoever next says they’re going first",
  "The person with the most hair",
  "Whoever holds their breath the longest",
  "Whoever is the best dancer",
  "Whoever is furthest south",
  "The last person who ate pancakes",
  "Whoever most recently slept with a stuffed animal",
  "Whoever has the biggest collection of any type",
  "The last person to get 8 hours of sleep",
  "Last bought an 'As Seen on TV' Product",
  "The person who most recently pet a cat",
  "The person who most recently pet a dog",
];

window.addEventListener("load", chooseFirst(), false);

function chooseFirst() {
  let selection = Math.floor(Math.random() * list.length);
  document.querySelector("#gofirst").innerHTML = list[selection];
}

function toggleSuggestion() {
  document.querySelector("#colon").classList.toggle("hidden");
  document.querySelector("#suggestionText").classList.toggle("hidden");
  document.querySelector("#submitSuggestion").classList.toggle("hidden");
}

function submitSuggestion() {
  let body = { suggestion: document.querySelector("#suggestionText").value };
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("/suggest", options).then(function (response) {
    response.json().then((res) => {
      console.log(res);
      document.querySelector("#suggestionText").value = "Success! Thank you.";
      setTimeout(() => toggleSuggestion(), 1000);
    });
  });
}
