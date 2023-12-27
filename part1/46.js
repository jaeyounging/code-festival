// # 문제46 : 각 자리수의 합 2

// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

let numArr = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
  numArr[i] = i + 1;
}

numArr.forEach((item) => {
  while (item) {
    sum += item % 10;
    item = Math.floor(item / 10);
  }
});

console.log(sum);
