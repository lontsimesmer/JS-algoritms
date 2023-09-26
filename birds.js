const arr = [1, 1, 2, 2, 3];

function migratoryBirds(arr) {
  let newArr = new Array(5).fill(0);
  console.log(newArr);
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i] - 1];
  }
  let sightBirds = Math.max(...newArr);
  console.log(newArr.indexOf(sightBirds) + 1);
}
migratoryBirds(arr);

Link = `https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three`;
