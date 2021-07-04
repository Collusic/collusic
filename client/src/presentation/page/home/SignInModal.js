import React from "react";
import { SignInModalContainer } from "./styled";

const signInModal = ({ closeModal }) => {
  return (
    <SignInModalContainer>
      <button onClick={closeModal} className="Modal__Button--Cancel">
        x
      </button>
      <h2>Collusic</h2>

      <input type="text" placeholder="Email" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <button className="SingInModal__SignUpButton">SIGN UP</button>
    </SignInModalContainer>
  );
};

export default signInModal;
