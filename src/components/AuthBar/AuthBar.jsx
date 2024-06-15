import { useDispatch, useSelector } from "react-redux";
import { SignInButton, SignUpButton } from "../Buttons/Buttons";
import Modal from "../Modal/Modal";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import styles from "./AuthBar.module.css";
import {
  selectIsModalSignInOpen,
  selectIsModalSignUpOpen,
} from "../../redux/user/selectors";
import {
  setModalSignInStatus,
  setModalSignUpStatus,
} from "../../redux/user/slice";

const AuthBar = () => {
  const isSignInModalOpen = useSelector(selectIsModalSignInOpen);
  const isSignUpModalOpen = useSelector(selectIsModalSignUpOpen);
  const dispatch = useDispatch();

  const openSignInModal = () => dispatch(setModalSignInStatus(true));
  const closeSignInModal = () => dispatch(setModalSignInStatus(false));

  const openSignUpModal = () => dispatch(setModalSignUpStatus(true));
  const closeSignUpModal = () => dispatch(setModalSignUpStatus(false));

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
