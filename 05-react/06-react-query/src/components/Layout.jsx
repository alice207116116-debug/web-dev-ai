import Header from "./Header.jsx";
import { Outlet, useLocation, Navigate } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.js";

const Layout = () => {
  const { pathname } = useLocation();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* 
  if (!token) {
    return <Navigate to="/login" />;
  }*/

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Layout;
