import { useFormContext } from "react-hook-form";

import styles from "./UploadPhoto.module.css";
import css from "../AddRecipeForm.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

const UploadPhoto = ({ imagePreview, setImagePreview }) => {
  const {
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      await setValue("thumb", e.target.files[0]);
      trigger();
    }
  };

  return (
    <div className={styles.previewBox}>
      <label htmlFor="thumb">
        {imagePreview ? (
          <>
            <div className={styles.imagePreviewThumb}>
              <img
                src={imagePreview}
                alt="Recipe Preview"
                className={styles.imagePreview}
              />
            </div>
            <p className={`${styles.uploadImageText} text`}>
              Upload another photo
            </p>
          </>
        ) : (
          <div className={styles.uploadBox}>
            <div className={styles.uploadImageButton}>
              <svg width={50} height={50} className={styles.svgImage}>
                <use href={`${sprite}#photo`}></use>
              </svg>
              <p className={`${styles.uploadImageText} text`}>Upload a photo</p>
            </div>
          </div>
        )}
        <div className={css.errorContainer}>
          <input
            type="file"
            id="thumb"
            accept="image/*"
            name="thumb"
            onChange={handleImageChange}
            hidden
          />
          {errors.thumb && (
            <span className={css.error}>{errors.thumb?.message}</span>
          )}
        </div>
      </label>
    </div>
  );
};

export default UploadPhoto;
