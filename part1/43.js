// # 문제43 : 10진수를 2진수로

// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**

let num = parseInt(prompt("숫자를 입력해 주세요."));
let binary = [];

while (num) {
  binary.push(num % 2);
  num = Math.floor(num / 2);
}

console.log(binary);
console.log(binary.reverse().join(""));

// 자바스크립트에서 제공하는 메소드
// console.log(num.toString(2));
