var quotes = {
  "Operator! give me the number for 9-1-1",
  "If somethings is to hard to do, then it's not worth doing",
  'Trying is the first step to Failure',
};
function new-Quote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
