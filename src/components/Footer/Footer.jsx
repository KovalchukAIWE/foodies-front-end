import css from './Footer.module.css';
import Container from '../Container/Container';
import sprite from '../../assets/img/icons-sprite.svg';
import Copyright from '../Copyright/Copyright';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <Container>
      <footer className={css.footer}>
        <div className={css.footerContent}>
          <FooterLogo />

          <ul className={css.footerSocialList}>
            <li className={css.footerSocialItem}>
              <a
                href='https://www.facebook.com/goITclub/'
                target='_blank'
                rel='noopener noreferrer'
                className={css.footerSocialLink}>
                <svg className={css.footerSocialIcon}>
                  <use href={`${sprite}#facebook`}></use>
                </svg>
              </a>
            </li>
            <li className={css.footerSocialItem}>
              <a
                href='https://www.instagram.com/goitclub/'
                target='_blank'
                rel='noopener noreferrer'
                className={css.footerSocialLink}>
                <svg className={css.footerSocialIcon}>
                  <use href={`${sprite}#instagram`}></use>
                </svg>
              </a>
            </li>
            <li className={css.footerSocialItem}>
              <a
                href='https://www.youtube.com/c/GoIT'
                target='_blank'
                rel='noopener noreferrer'
                className={css.footerSocialLink}>
                <svg className={css.footerSocialIcon}>
                  <use href={`${sprite}#youtube`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <Copyright />
      </footer>
    </Container>
  );
};

export default Footer;
