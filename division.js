const s = [2, 2, 1, 3, 2],
  d = 4,
  m = 2;

function birthday(s, d, m) {
  let answer = 0;
  for (let i = 0; i <= s.length + m; i++) {
    if (s.slice(i, i + m).reduce((res, req) => res + req, 0) === d) {
      answer++;
    }
  }
  console.log(answer);
}
birthday(s, d, m);

Link = `https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three`;
