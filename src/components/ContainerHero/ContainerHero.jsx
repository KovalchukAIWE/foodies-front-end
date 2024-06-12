import styles from "./ContainerHero.module.css";

const ContainerHero = ({ children }) => {
  return <div className={styles.containerHero}>{children}</div>;
};

export default ContainerHero;
