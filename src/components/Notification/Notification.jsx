import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Notification.module.css';

const Notification = () => {
  const notify = () => toast('This is a black notification!');

  return (
    <div>
      <button
        className={styles.button}
        onClick={notify}>
        Show Notification
      </button>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        className={styles.toastContainer}
      />
    </div>
  );
};

export default Notification;
