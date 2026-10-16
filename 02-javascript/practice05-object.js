const computer = ["가위", "바위", "보"];

let win = 0;
let draw = 0;
let lose = 0;

while (true) {const choice = computer[Math.floor(Math.random() * 3)];
const input = prompt("가위, 바위, 보!"); if (input === null) {break;}
if ((input === "가위" && choice === "보") || (input === "바위" && choice === "가위")
     || (input === "보" && choice === "바위")) {win++; console.log("승리!");}
     else if (choice === input) {draw++; console.log("무승부!");} 
     else {lose++; console.log("패배!");}}

console.log(`승: ${win} 무: ${draw} 패: ${lose}`);
