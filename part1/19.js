// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
const nums = prompt().split(" ");

console.log(Math.pow(nums[0], nums[1]));

// Math.pow(a, b) : a의 b승
