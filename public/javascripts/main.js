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
  "Whoever has washed their bedsheets most recently",
  "Whoever brought the most food to game night",
  "Whoever brought the most drinks to game night",
  "First person to get completely under the table",
  "The person who is reading this",
  "The first person to pay me a compliment",
  "Whoever brought the best snacks",
  "The person who arrived first",
  "The first person to run outside and come back sitting at the table",
  "Whoever has the most stuffed animals",
  "The person who has volunteered the most hours this month",
  "The person who has given the most to charity this month",
  "Whoever says the nicest thing to the person reading this",
];

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
  document.querySelector("#suggestionText").classList.toggle("hidden");
  document.querySelector("#submitSuggestion").classList.toggle("hidden");
  document.querySelector("#cancelSuggestion").classList.toggle("hidden");
  document.querySelector("#suggestionField").classList.toggle("hidden");
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
      document.querySelector("#suggestionText").value +=
        "\nSuccess! Thank you.";
      document.querySelector("#suggestionText").select();
      return false;
    });
  });
}

function cancelSuggestion() {
  document.querySelector("#suggestionText").value = "";
  toggleSuggestion();
}
