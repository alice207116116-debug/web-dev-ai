/*
   tailwindcss
   1. npm i tailwindcss @tailwindcss/vite
   2. vite.config.js에 tailwinds 관련 설정 코드 추가
   3. tailwind.css 추가
   4. main.jsx에 tailwind.css import!
*/

// props : 부모(Cars)가 넘겨 주는 값
// 카드마다 다른 부분만 props로 받고 모양은 그대로
const CarsCard = ({ 
    plate, 
    fuel, 
    name, 
    year, 
    serviceCount, 
    lastDate, 
    lastItem,
 }) => {};

export default CarsCard;