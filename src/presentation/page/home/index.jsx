import React from "react";
import Modal from "react-modal";
import Login from "./LoginModal";
import BG from "assets/bg.png";
import SignIn from "./SignInModal";
import {
  StyledContainer,
  HomeImageContainer,
  HomeNav,
  HomeImage,
  customStyles,
} from "./styled";

const Home = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [LoginModalIsOpen, setLoginModalIsOpen] = React.useState(true);
  const [signInModalIsOpen, setSigninModalIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
    setSigninModalIsOpen(false);
    setLoginModalIsOpen(true);
  }
  function openSignInModal() {
    setSigninModalIsOpen(true);
    setLoginModalIsOpen(false);
  }
  return (
    <StyledContainer id="HomeContainer">
      <HomeNav>
        <button>Collusic</button>
        <button onClick={openModal}>Log in</button>
      </HomeNav>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="LogIn Modal"
      >
        {LoginModalIsOpen && (
          <Login
            closeModal={closeModal}
            openSignInModal={openSignInModal}
          ></Login>
        )}
        {signInModalIsOpen && <SignIn closeModal={closeModal}></SignIn>}
      </Modal>
      <HomeImageContainer>
        <HomeImage src={BG}></HomeImage>
      </HomeImageContainer>
    </StyledContainer>
  );
};
export default Home;
