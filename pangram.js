const string =
  "rebase is a school of performance whose goal is to have more students next year";

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
  let newString = string.split().filter((i) => i !== 1);
  console.log(newString);
}
pangramPrint(string);
