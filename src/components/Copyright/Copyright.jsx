import css from './Copyright.module.css';
const Copyright = () => {
  return (
    <div className={css.footerCopyrightBlock}>
      <p className={css.footerCopyright}>@2024, Foodies. All rights reserved</p>
    </div>
  );
};

export default Copyright;
