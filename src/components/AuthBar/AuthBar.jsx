import { useState } from "react";
import { SignInButton, SignUpButton } from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import styles from "./AuthBar.module.css";

const AuthBar = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  return (
    <div className={styles.authBar}>
      <SignInButton onClick={openSignInModal} text="sign in" />
      <SignUpButton onClick={openSignUpModal} text="sign up" />
      <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal}>
        <SignInModal onClose={closeSignInModal} />
      </Modal>

      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <SignUpModal onClose={closeSignUpModal} />
      </Modal>
    </div>
  );
};

export default AuthBar;
