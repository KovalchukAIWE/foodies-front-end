import SignInForm from "../SignInForm/SignInForm";
import styles from "./SignInModal.module.css";

const SignInModal = ({ onClose }) => {
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    onClose();
  };

  return (
    <>
      <h3 className={styles.signInTitle}>Sign In</h3>
      <SignInForm onSubmit={onSubmit} />
      <p className={styles.signInText}>
        Dont have an account?{" "}
        <button className={styles.signInLink} type="button">
          Create an account
        </button>
      </p>
    </>
  );
};

export default SignInModal;
