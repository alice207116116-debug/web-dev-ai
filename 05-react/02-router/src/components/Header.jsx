import { Link, NavLink } from "react-router";
/*
   a 태그는 브라우저가 해당 주소의 html을 통째로 새로 받아 온다
   -> 화면이 깜빡이고, state가 전부 사라진다
   -> 리액트 내부에서 계속 사용하신다면 외부 링크 연결시
   Link는 눌러도 새로 받지 않는다. 
   -> 주소만 바꾸고 라우터가 그 주소에 맞는 화면만 갈아끼운다.
*/
const activeStyle = ({ isActive }) => ({
    fontWeight : isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
});

// 기존 header에 해당하는 태그들만
const Header = () => {
    return (
    <>
      <header>
      </header>
      <div className="menu-overlay" id="menuOverlay"></div>
    </>
  );
};
export default Header;