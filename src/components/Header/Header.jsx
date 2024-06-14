import { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";

const Header = () => {
  const [isLogged] = useState(false);

  return (
    <Container>
      <div className={styles.header}>
        {isLogged ? (
          <>
            <Logo />
            <Nav />
            <UserBar />
          </>
        ) : (
          <>
            <Logo />
            <AuthBar />
          </>
        )}
      </div>
    </Container>
  );
};

export default Header;
