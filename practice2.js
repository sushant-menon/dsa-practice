function dancingFunction(string) {
  string = string.toLowerCase().split("");
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (count) {
        string[i] = string[i].toLowerCase();
      } else {
        string[i] = string[i].toUpperCase();
      }
      count = !count;
    }
  }
  return string.join("");
}

console.log(dancingFunction("This is a dancing sentence"));
console.log(dancingFunction("This is  a dancing sentence"));
console.log(dancingFunction("aaaaaaaaaaa"));
console.log(dancingFunction("z"));
