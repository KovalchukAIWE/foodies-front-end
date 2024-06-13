import { useFormContext } from "react-hook-form";
import Select from "react-select";

import styles from "./UploadPhoto.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

const UploadPhoto = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.uploadPhoto}>
      <svg width={50} height={50} className={styles.svgPhoto}>
        <use href={`${sprite}#photo`}></use>
      </svg>
      <p className={styles.uploadPhotoText}>Upload a photo</p>
    </div>
  );
};

export default UploadPhoto;
