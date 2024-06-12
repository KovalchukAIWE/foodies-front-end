import css from "./Footer.module.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container>
      <footer className={css.footer}>
        <div className={css.footerContent}>
          <a href="#" className={css.logoFooter}>Foodies</a>
          <ul className={css.footerSocialList}>
            <li className={css.footerSocialItem}>
              <a href="https://www.facebook.com/goITclub/" target="_blank" rel="noopener noreferrer" className={css.footerSocialLink}>
                <svg className={css.footerSocialIcon}>
                  <use href="/vite.svg#Facebook"></use>
                </svg>
              </a>
            </li>
            <li className={css.footerSocialItem}>
              <a href="https://www.instagram.com/goitclub/" target="_blank" rel="noopener noreferrer" className={css.footerSocialLink}>
                <svg className={css.footerSocialIcon}>
                  <use href="/vite.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li className={css.footerSocialItem}>
              <a href="https://www.youtube.com/c/GoIT" target="_blank" rel="noopener noreferrer" className={css.footerSocialLink}>
                <svg className={css.footerSocialIcon}>
                  <use href="/vite.svg#youtube"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={css.footerCopyrightBlock}>
          <p className={css.footerCopyright}>@2024, Foodies. All rights reserved</p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
