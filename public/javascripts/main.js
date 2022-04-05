const list = [
  "Whoever has seen their parents naked most recently",
  "Whoever has most recently cheated on their significant other",
  "The last person to have made out with a relative",
  "The last person to have seen genetalia on a big screen",
  "The last person to have been questioned by a police officer",
  "The last person to have buried a dead thing",
  "Whoever's gotten black out drunk most recently",
];

window.addEventListener("load", chooseFirst(), false);

function chooseFirst() {
  let selection = Math.floor(Math.random() * list.length);
  document.querySelector("#gofirst").innerHTML = list[selection];
}
