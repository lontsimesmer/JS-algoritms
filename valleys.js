const steps = 8,
  path = ["D", "D", "U", "U", "U", "U", "D", "D"];

function countingValleys(steps, path) {
  let hikeArr = [],
    seaLevel = 0,
    valley = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      seaLevel += 1;
    } else if (path[i] === "D") {
      seaLevel -= 1;
      if (seaLevel === 0) {
        valley++;
      }
    }
    hikeArr.push(seaLevel);
  }
  console.log(valley);
}
countingValleys(steps, path);

Link = `https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two`;
