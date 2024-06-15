import { useDispatch } from "react-redux";
import SignInForm from "../SignInForm/SignInForm";
import styles from "./SignInModal.module.css";
import { logIn } from "../../redux/user/operations";
import { setModalSignInStatus, setModalSignUpStatus } from "../../redux/user/slice";

const SignInModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(logIn(data));
    onClose();
  };

  const handleModalSignUpOpen = () => {
    dispatch(setModalSignUpStatus(true));
    dispatch(setModalSignInStatus(false));
  }

  return (
    <>
      <h3 className={styles.signInTitle}>Sign In</h3>
      <SignInForm onSubmit={handleSubmit} />
      <p className={styles.signInText}>
        Dont have an account?{" "}
        <button className={styles.signInLink} type="button" onClick = {handleModalSignUpOpen}>
          Create an account
        </button>
      </p>
    </>
  );
};

export default SignInModal;
