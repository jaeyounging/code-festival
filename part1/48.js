// # 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

const str = prompt("문자열을 입력해 주세요.");
let strArr = str.split("");

let result = strArr.map((item) => {
  if (item === item.toUpperCase()) {
    return item.toLowerCase();
  } else {
    return item.toUpperCase();
  }
});

console.log(result.join(""));
