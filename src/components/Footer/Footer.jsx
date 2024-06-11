import css from "./Footer.module.css";

const Footer = () => {
  return <footer className={css.footer}>
    <div className={css.footerContent}>
      <a href="#" className={css.logoFooter}>logo-footer</a>
      <ul className={css.footerSocialList}>
        <li>
        <a href="https://www.facebook.com/goITclub/">facebook</a>
        </li>
        <li>
        <a href="https://www.instagram.com/goitclub/">Instagram</a>
        </li>
        <li>
        <a href="https://www.youtube.com/c/GoIT">youtube</a>
        </li>
      </ul>
    </div>
    <div>
      <p className={css.footerCopyright}>@2024, Foodies. All rights reserved</p>
    </div>
  </footer>;
};

export default Footer;
