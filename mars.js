const s = "SOSTOT";

function marsExplorattion(s) {
  return s.split("").filter((char, index) => {
    if ((index + 2) % 3 === 0 && char !== "O") {
      console.log(char);
    } else if (char !== "S" && (index + 2) % 3 !== 0) {
      console.log(char);
    }
  }).length;
}
marsExplorattion(s);

Link = `https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two`;
