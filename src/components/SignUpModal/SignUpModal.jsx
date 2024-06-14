import SignUpForm from "../SignUpForm/SignUpForm";
import styles from "./SignUpModal.module.css";

const SignUpModal = ({ onClose }) => {
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    onClose();
  };

  return (
    <>
      <h3 className={styles.signUpTitle}>Sign Up</h3>
      <SignUpForm onSubmit={onSubmit} />
      <p className={styles.signUpText}>
        I already have an account?{" "}
        <button className={styles.signUpLink} type="button">
          Sign in
        </button>
      </p>
    </>
  );
};

export default SignUpModal;
