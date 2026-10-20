// 모든 페이지의 클래스명이 겹치지 않으면 css 파일 import만 해도 끝!
// css 파일을 해당 페이지 컴포넌트에 import해도 전체 반영 된다
import "../styles/vehicle-management.css";
import styles from "./Cars.module.css";
import closeIcon from "../assets/close.svg";
import { X } from "lucide-react";

// vehicle-management.html의 body 안에 태그들
const Cars = () => {
  return (
    <>
      <main>
      </main>
    </>
  );
};

export default Cars;