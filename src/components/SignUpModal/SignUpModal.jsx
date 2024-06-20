import SignUpForm from "../SignUpForm/SignUpForm";
import { useDispatch } from "react-redux";
import styles from "./SignUpModal.module.css";
import { register, logIn } from "../../redux/user/operations";
import {
  setModalSignInStatus,
  setModalSignUpStatus,
} from "../../redux/user/slice";

const SignUpModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
      await dispatch(register(data)).unwrap();
      await dispatch(
        logIn({ email: data.email, password: data.password })
      ).unwrap();
      onClose();
    } catch (error) {
      console.error("Failed to register and log in:", error);
    }
  };

  const handleModalSignInOpen = () => {
    dispatch(setModalSignUpStatus(false));
    dispatch(setModalSignInStatus(true));
  };

  return (
    <>
      <h3 className={styles.signUpTitle}>Sign Up</h3>
      <SignUpForm onSubmit={handleSubmit} />
      <p className={styles.signUpText}>
        I already have an account?{" "}
        <button
          className={styles.signUpLink}
          type="button"
          onClick={handleModalSignInOpen}
        >
          Sign in
        </button>
      </p>
    </>
  );
};

export default SignUpModal;
