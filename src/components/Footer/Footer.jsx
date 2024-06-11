import css from "./Footer.module.css";

const Footer = () => {
  return <footer className={css.footer}>
    <div className={css.footerContent}>
      <a href="#" className={css.logoFooter}>Foodies</a>
      <ul className={css.footerSocialList}>
        <li className={css.footerSocialItem}>
        <a href="https://www.facebook.com/goITclub/" target="_blank"><svg><use></use></svg></a>
        </li>
        <li className={css.footerSocialItem}>
        <a href="https://www.instagram.com/goitclub/" target="_blank"><svg><use></use></svg></a>
        </li>
        <li className={css.footerSocialItem}>
          <a href="https://www.youtube.com/c/GoIT"
            target="_blank"><svg><use></use></svg></a>
        </li>
      </ul>
    </div>
    <div className={css.footerCopyrightBlock}>
      <p className={css.footerCopyright}>@2024, Foodies. All rights reserved</p>
    </div>
  </footer>;
};

export default Footer;
