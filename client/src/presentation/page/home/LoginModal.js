import React from "react";
import { LoginModalContainer } from "./styled";
import { Link } from "react-router-dom";

const LoginModal = ({ closeModal, openSignInModal }) => {
  return (
    <LoginModalContainer>
      <button onClick={closeModal} className="Modal__Button--Cancel">
        x
      </button>
      <h2>Collusic</h2>
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <Link to="/">
        <button id="LoginModal__LoginButton">LOG IN</button>
      </Link>
      <button id="LoginModal__SignInButton" onClick={openSignInModal}>
        회원가입
      </button>
    </LoginModalContainer>
  );
};

export default LoginModal;
