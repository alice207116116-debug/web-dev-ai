// 숫자 맞추기 게임
const answer = Math.floor(Math.random() * 100) + 1;

let count = 0;
let guess = null;

while (guess != answer) {guess = prompt("1부터 100사이의 숫자를 맞춰보세요.");
if (guess === null) {alert("제대로 입력해주세요."); continue;}
if (isNaN(guess)) {alert("제대로 입력해주세요."); continue;}
guess = Number(guess); count++;
if (guess > answer) {alert("해당 숫자보다 작습니다.");}
else if (guess < answer) {alert("해당 숫자보다 큽니다.");}}

alert(`정답입니다! ${count}번 만에 맞추셨습니다.`);

// 함수로 나눠보기
function showMessage() {console.log("제대로 입력해주세요.");}
showMessage();





