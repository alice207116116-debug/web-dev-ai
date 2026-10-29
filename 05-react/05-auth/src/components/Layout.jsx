import Header from "./Header.jsx";
import { Outlet, useLocation, Navigate } from "react-router";
import { useEffect } from "react"; 

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 토큰이 없으면 로그인 화면으로
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;