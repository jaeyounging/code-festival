// # 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

const nums = prompt("숫자를 입력해 주세요.");
const numsArr = nums.split(" ");
let max = 0;

for (let i = 0; i < numsArr.length; i++) {
  if (parseInt(numsArr[i]) > max) {
    max = numsArr[i];
  }
}

console.log(max);
