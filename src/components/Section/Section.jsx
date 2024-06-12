import Container from "../Container/Container.jsx";

import styles from "./Section.module.css";

const Section = ({ children }) => {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
