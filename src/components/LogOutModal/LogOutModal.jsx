import { useDispatch } from "react-redux";
import { FormButton, FormButtonCancel } from "../Buttons/Buttons";
import { logOut } from "../../redux/user/operations";
import styles from "./LogOutModal.module.css";

const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <h3 className={styles.logoutModalTitlte}>Are you logging out?</h3>
      <p className={styles.logoutModalSubtitlte}>
        You can always log back in at my time.
      </p>
      <div className={styles.logoutModalButton}>
        <FormButton onClick={handleLogOut} text="Log out" />
      </div>
      <FormButtonCancel onClick={onClose} text="cancel" />
    </>
  );
};

export default LogOutModal;
