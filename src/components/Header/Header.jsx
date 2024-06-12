import { SignInButton, SignUpButton } from "../Buttons/Buttons";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <div className={styles.header}>
        <Logo />
        <div className={styles.headerButtons}>
          <SignUpButton text="sign up" />
          <SignInButton text="sign in" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
