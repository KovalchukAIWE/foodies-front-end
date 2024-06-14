import { FormButton, FormButtonCancel } from "../Buttons/Buttons";
import styles from "./LogOutModal.module.css";

const LogOutModal = () => {
  return (
    <>
      <h3 className={styles.logoutModalTitlte}>Are you logging out?</h3>
      <p className={styles.logoutModalSubtitlte}>
        You can always log back in at my time.
      </p>
      <div className={styles.logoutModalButton}>
        <FormButton text="Log out" />
      </div>
      <FormButtonCancel text="cancel" />
    </>
  );
};

export default LogOutModal;
