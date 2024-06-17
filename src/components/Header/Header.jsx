import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Header.module.css";

const Header = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    setTheme(location.pathname === "/" ? "dark" : "light");
  }, [location]);

  return (
    <header className={clsx(theme === "light" ? styles.light : styles.dark)}>
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
    </header>
  );
};

export default Header;
