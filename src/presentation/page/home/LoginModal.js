import React, { useState, useCallback } from "react";
import { LoginModalContainer } from "./styled";
import API from "data/http/axios/api";
import useLastLocationHistory from "lib/history";

const LoginModal = ({
  closeModal,
  openSignInModal,
  setErrorModal,
  setError,
}) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const onChange = useCallback(
    (e) => {
      setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value,
      });
    },
    [loginForm]
  );
  const setHistory = useLastLocationHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    const article = {
      email: loginForm.email,
      password: loginForm.password,
    };
    API.post("/auth/login", article)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          closeModal();
          setHistory("/requestprojects");
        } else {
          setErrorModal();
          setError(`${data.msg}`);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <LoginModalContainer>
      <form onSubmit={onSubmit} name="loginForm">
        <button onClick={closeModal} className="Modal__Button--Cancel">
          x
        </button>
        <h2>Collusic</h2>
        <input
          type="text"
          id="LoginModal__email"
          placeholder="이메일"
          name="email"
          value={loginForm.email}
          onChange={onChange}
        />
        <input
          type="password"
          id="LoginModal__password"
          placeholder="비밀번호"
          name="password"
          value={loginForm.password}
          onChange={onChange}
        />
        <button id="LoginModal__LoginButton" type="submit">
          로그인
        </button>
        <button id="LoginModal__SignInButton" onClick={openSignInModal}>
          회원가입
        </button>
      </form>
    </LoginModalContainer>
  );
};

export default LoginModal;
