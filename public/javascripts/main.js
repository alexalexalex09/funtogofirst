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
];

const bestList = [
  "Whoever can guess closest to the current time without looking at a clock",
  "Whoever next says they’re going first",
  "The person with the most hair",
  "Whoever holds their breath the longest",
  "Whoever is the best dancer",
  "Whoever is furthest south",
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
