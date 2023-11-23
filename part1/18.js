// # 문제18 : 평균 점수

// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요.
// **단, 소숫점 자리는 모두 버립니다.**

// 입출력

// 입력 : 20 30 40
// 출력 : 30

const scores = prompt().split(" ");
let sum = 0;

scores.forEach((item) => {
  sum += parseInt(item);
});

console.log(Math.floor(sum / scores.length));

/* 
Math.floor() : 주어진 값의 소수점을 없애고 이하의 가장 큰 정수를 반환한다.
*/
