import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate;
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <button className={styles.logo} onClick={handleButtonClick}>
      foodies
    </button>
  );
};

export default Logo;
