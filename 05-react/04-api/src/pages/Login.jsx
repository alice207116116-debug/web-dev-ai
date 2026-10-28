/*
  shadcn/ui : 버튼, 입력칸, 표, 모달, 토스트(알림), 달력 등 수십개 컴포넌트를 준다
  -> 필요한 것만 add해서 가져오면 됌

  세팅 (한 번만 하면 됩니다)
  1.jsconfig.json 파일 추가
  2.vite.config.js 설정 추가
  3. npx shadcn@latest init
*/

import { toast } from "@/components/ui/toast";
import { Link, useNavigate } from "react-router"; // Link : 바로 이동, useNavigate : 코드를 걸쳐서 이동 -> 리액트 도구 훅 (Hook)

const Login = () => {
  const navigate = useNavigate(); // 페이지를 이동(리다이렉트)할 때 사용하는 리액트 도구 훅 (Hook)

  const handleSubmit = (e) => {
    e.preventDefault(); // 기존 바로 폼 제출하는 이벤트 막기
    toast.add({ title: "로그인을 성공했습니다!" });
    navigate("/"); // 원래는 서버 갔다가 온 후
  };

  return (
    <section className="login-screen">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-brand">정비노트</div>
        <p className="login-title">자동차검사정비 · 관리자</p>

        <div className="field">
          <label htmlFor="lg-id">아이디</label>
          <input
            className="input"
            id="lg-id"
            type="text"
            placeholder="아이디를 입력하세요"
            autoComplete="username"
          />
        </div>
        <div className="field">
          <label htmlFor="lg-pw">비밀번호</label>
          <div className="pw-wrap">
            <input
              className="input"
              id="lg-pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
              autoComplete="current-password"
            />
            <button type="button" className="pw-toggle" data-target="lg-pw">
              보기
            </button>
          </div>
        </div>

        <button className="btn-login" type="submit">
          로그인
        </button>
        <p className="form-result error" id="login-result"></p>

        <p className="login-foot">
          <Link to="/signup">계정 신청</Link>
          <span className="sep">·</span>
          <Link to="#">비밀번호를 잊으셨나요?</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
