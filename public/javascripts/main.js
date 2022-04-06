const worstList = [
  "Whoever has seen their parents naked most recently",
  "Whoever has most recently cheated on their significant other",
  "The last person to have made out with a relative",
  "The last person to have seen genetalia on a big screen",
  "The last person to have been questioned by a police officer",
  "The last person to have buried a dead thing",
  "Whoever's gotten black out drunk most recently",
  "The person with the most pubic hair",
  "Whoever has been in the most legal trouble",
  "Whoever has most recently committed a crime",
  "Whoever pooped most recently",
  "Whoever had sex most recently",
  "The last person to have had a sex dream about their boss",
  "The person who has gone the longest without showering recently",
  "The last person caught cheating at a game",
  "The person who most recently peed in a pool",
  "The person who last got caught farting when they were purposely trying to hide it",
  "The person who last spent money on an illegal activity",
  "Person most recently asked by security to leave a location",
  "Most recently had to ask a doctor an embarrassing question",
];

const bestList = [
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
];

let list = worstList;

window.addEventListener("load", chooseFirst(), false);

function chooseFirst() {
  let selection = Math.floor(Math.random() * list.length);
  document.querySelector("#gofirst").innerHTML = list[selection];
}

function toggleWorst() {
  console.log("toggle");
  const state = document.querySelector("#switch").innerHTML;
  if (state === "worst") {
    document.querySelector("#switch").innerHTML = "best";
    list = bestList;
    document.querySelector("body").classList.add("best");
  } else {
    document.querySelector("#switch").innerHTML = "worst";
    list = worstList;
    document.querySelector("body").classList.remove("best");
  }
  chooseFirst();
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
