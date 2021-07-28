import React, { useState, useEffect } from "react";
import { SignInModalContainer } from "./styled";
import axios from "axios";
import passwordCheck from "../../../assets/PasswordMatch.png";

const SignInModal = ({ closeModal, setErrorModal, setError }) => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const signIn = (e) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const passwordCheckImage = document.getElementById(
      "SignInModal__passwordCheckImage"
    );
    if (signInForm.password === signInForm.passwordCheck) {
      passwordCheckImage.style.display = "block";
    } else {
      passwordCheckImage.style.display = "none";
    }
  }, [signInForm]);
  const SignInSubmit = (e) => {
    e.preventDefault();
    const passwordConfirmation = document.getElementById(
      "SignInModal__passwordConfirmation"
    ).value;
    if (signInForm.password !== passwordConfirmation) {
      setErrorModal();
      return setError("패스워드와 패스워드 확인이 다릅니다.");
    }
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regExp.test(signInForm.email)) {
      setErrorModal();
      return setError("올바른 이메일 양식을 작성해주십시오.");
    }
    const article = {
      email: signInForm.email,
      password: signInForm.password,
    };
    axios
      .post("http://localhost:8001/auth/join", article)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          setErrorModal();
          setError("회원가입에 성공하였습니다.");
          closeModal();
        } else {
          setErrorModal();
          setError("이미 존재하는 이메일입니다.");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <form onSubmit={SignInSubmit}>
      <SignInModalContainer>
        <button onClick={closeModal} className="Modal__Button--Cancel">
          x
        </button>
        <h2>Collusic</h2>

        <input
          id="SignInModal__email"
          type="text"
          placeholder="Email"
          name="email"
          onChange={signIn}
        />
        <input
          id="SignInModal__password"
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={signIn}
        />
        <div>
          <input
            id="SignInModal__passwordConfirmation"
            type="password"
            placeholder="비밀번호 확인"
            onChange={signIn}
            name="passwordCheck"
          />
          <img
            id="SignInModal__passwordCheckImage"
            alt="check"
            src={passwordCheck}
          ></img>
        </div>
        <button className="SingInModal__SignUpButton" type="submit">
          SIGN UP
        </button>
      </SignInModalContainer>
    </form>
  );
};

export default SignInModal;
