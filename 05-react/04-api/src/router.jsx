// createBrowserRouter : 주소(URL)와 화면(컴포넌트)을 연결하는 router를 만드는 함수
import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard.jsx";
import Cars from "./pages/Cars.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";

// 주소(URL) <-> 화면 연결 - 객체 하나 { path, element }
// path : 주소창에서 localhost:5173 뒤에 오는 부분
// element : 매칭된 path 주소일 때 그릴 화면(대문자로 시작)
// children에서 첫 화면("/")은 index: ture

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "cars", element: <Cars /> },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;

/*
  - SSR(Server Side Rendering) : 서버에서 화면을 그려서 클라이언트에게 전달 -> Next.js
  - CSR(Client Side Rendering) : 클라이언트에서 화면을 그리는 방식 -> React
  - SPA(Single Page Application) : HTML 페이지가 하나뿐인 애플리케이션 -> React
*/
