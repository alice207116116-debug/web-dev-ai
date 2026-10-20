import { Link, NavLink } from "react-router";
import { User } from "lucide-react";

const Header = () => {
    return (
    <>
      <header>
      <div className="header-left">
      <button
       type="button"
       className="menu-toggle"
       id="menuToggle"
       aria-label="메뉴 열기">
       </button>
       </div>
       </header>
    </>
  );
};
export default Header;