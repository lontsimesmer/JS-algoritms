const string = "The quick brown fox jumps over the lazy dog";

function pangramPrint(string) {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newString = string.split("").filter((a) => a !== "");
  console.log(newString);
  for (let i = 0; i < letters.length; i++) {
    if (newString.indexOf(letters[i]) === -1) {
      console.log("not pangram");
    } else if (newString.indexOf(letters[i]) === 1) {
      console.log("pangram");
    }
  }
}
pangramPrint(string);
