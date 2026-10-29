import Header from "./Header.jsx";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react"; 

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;