var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");
var options = ["yes", "maybe"];
var options = [
  " For sure!",
  "Most certainly",
  "It is decidedly so",
  "What's you answer.Lol",
  "Yes  definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "ask again in 1 hour",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don’t count it out",
  "My reply is,if you make it so",
  "My sources say bank on it",
  "Outlook not so good",
  "Without a doubt",
  " most certainly yes",
  "Positive",
  "Better not tell you now",
  "It is so",
  "Concentrate and ask again",
];

button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Please enter a question!");
  } else {
    eight.innerText = "";
    var num = input.value.length % options.length;
    answer.innerText = options[num];
  }
});
