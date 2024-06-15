import { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [isLogged] = useState(true);

  return (
    <Container>
      <div className={styles.header}>
        {isLogged ? (
          <>
            <Logo />
            <Nav />
            <UserBar />
            <BurgerMenu />
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
