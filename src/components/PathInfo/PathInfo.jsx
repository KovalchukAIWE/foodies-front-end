import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./PathInfo.module.css";

const PathInfo = ({ pageName }) => {
  return (
    <>
      <div className={css.path}>
        <Link className={clsx(css.text, css.grey)} to="/">
          Home
        </Link>
        <p className={clsx(css.text, css.grey)}>/</p>
        <p className={clsx(css.text, css.dark)}>{pageName}</p>
      </div>
    </>
  );
};

export default PathInfo;
