export const UserInfo = () => {
  return `<div className="profile-card">
      <div className="profile-photo-box">
        <div className="image-wrapper">
          <img
            srcset="./img/image.png 1x, ./img/image-2x.png 2x"
            src="./img/image.png"
            alt="profile photocard"
            className="profile-photo"
          />
        </div>
        <button
          type="button"
          className="add-profile-photo-btn"
          id="add-profile-photo-btn"
          aria-label="button for adding new profile photo"
        >
          <svg className="add-photo-icon">
            <use href="./img/symbol-defs.svg#icon-add"></use>
          </svg>
        </button>
      </div>
      <h2 className="name">Victoria</h2>
      <ul className="profile-info-list">
        <li className="profile-info-item">
          <p className="info-key">
            Email: <span className="info-value">viccy.ajhgs@gmail.com</span>
          </p>
        </li>
        <li className="profile-info-item">
          <p className="info-key">
            Added recipies: <span className="info-value">9</span>
          </p>
        </li>

        <li className="profile-info-item">
          <p className="info-key">Followers: <span className="info-value">5</span></p>
        </li>
        <li className="profile-info-item">
          <p className="info-key">Favorites: <span className="info-value">9</span></p>
        </li>
        <li className="profile-info-item">
          <p className="info-key">Followings: <span className="info-value">5</span></p>
        </li>
      </ul>
    </div>`;
};
