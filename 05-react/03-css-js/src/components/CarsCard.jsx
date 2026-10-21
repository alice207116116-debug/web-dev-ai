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
 }) => {
    return (
    // background-color: var(--card-bg) -> bg-[var(--card-bg)]
    // border: 1px solid var(--border) -> border border-[var(--border)]
    // border-radius: 14px -> rounded-[14px]
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02)
    // min-width: 0 -> min-w-0
    // padding: 16px -> p-4
  )
};
export default CarsCard;
