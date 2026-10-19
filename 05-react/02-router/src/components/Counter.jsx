import { useState } from "react";

const Counter = ({ label }) => {
  const [waiting, setWaiting] = useState(0);

  return (
    <section className="screen">
      <h2>{label}</h2>
      <p>대기 중인 차량 : {waiting}대</p>
      <button
        onClick={() => {
          setWaiting(waiting + 1);
        }}
      >
        한 대 접수
      </button>
      <button
        onClick={() => {
          setWaiting(waiting > 0 ? waiting - 1 : 0);
        }}
      >
        한 대 출고
      </button>
      <button
        onClick={() => {
          setWaiting(0);
        }}
      >
        비우기
      </button>
    </section>
  );
};

export default Counter;