// 배경
const colorBox = document.querySelector("#colorBox");
const colors = ["#B7DCC8", "#D5BAFF", "#BDE0FE", "#FFDFBA", "#FFB3BA", "#D9D9D9"];
function changeColor() {const random = Math.floor(Math.random() * colors.length);
        colorBox.style.backgroundColor = colors[random];}
changeColor(); setInterval(changeColor, 2500);

// 현재 시간
const dayDate = document.querySelector("#dayDate");
const time = document.querySelector("#time");
function showDate() {const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const week = weeks[now.getDay()];
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = String(now.getSeconds()).padStart(2, "0");
dayDate.textContent = `${year}-${month}-${day} (${week})`
time.textContent = `${hours}:${minutes}:${seconds}`;}
showDate();
setInterval(showDate, 1000);

// 올해 남은 시간
const countdown = document.querySelector("#countdown");
function showRemaining() 
{const now = new Date(); const end = new Date(now.getFullYear() + 1, 0, 1);
 const remaining = end - now;
 const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
 const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
 const minutes = Math.floor((remaining / (1000 * 60)) % 60);
 const seconds = Math.floor((remaining / 1000) % 60);  
 countdown.textContent = `올해 남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;};
showRemaining();
setInterval(showRemaining, 1000);

// 인용문
const quotes = [{
    en: "God doesn't require us to succeed: he only requires that you try.",
    ko: "신은 우리에게 성공을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",},
  {en: "Hold faithfulness and sincerity as first principles.",
   ko: "충심과 성실을 첫 번째 원칙으로 삼아라.",},
  {en: "Only actions give life strength; only moderation gives it a charm.",
   ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다.",},
  {en: "No one has ever made a difference by being like everyone else.",
   ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없다.",},];
const enQuote = document.querySelector("#enQuote");
const koQuote = document.querySelector("#koQuote");
function changeContent() {const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random]; enQuote.textContent = quote.en;
    koQuote.textContent = quote.ko;}
changeContent();
setInterval(changeContent, 5000);