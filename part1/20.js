// # 문제20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

// 입출력

// 입력 : 10 2
// 출력 : 5 0

const nums = prompt().split(" ");

const result1 = Math.floor(parseInt(nums[0]) / parseInt(nums[1]));
const result2 = parseInt(nums[0]) % parseInt(nums[1]);

console.log(result1, result2);
