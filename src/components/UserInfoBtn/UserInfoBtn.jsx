import { useEffect, useState } from "react";
import {
  setFollowUserByUserId,
  setUnfollowUserByUserId,
} from "../../services/user";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/user/operations";
import styles from "./UserInfoBtn.module.css";

const UserInfoBtn = ({ isOwner, isFollowing: initialIsFollowing, id }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [buttonText, setButtonText] = useState(
    initialIsFollowing ? "Unfollow" : "Follow"
  );
  const dispatch = useDispatch();

  const handleFollowUserById = async (id) => {
    try {
      await setFollowUserByUserId({ id });
      setIsFollowing(true);
      setButtonText("Unfollow");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUnfollowUserById = async (id) => {
    try {
      await setUnfollowUserByUserId({ id });
      setIsFollowing(false);
      setButtonText("Follow");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUserButton = (id) => {
    if (isOwner) {
      dispatch(logOut());
    } else {
      if (isFollowing) {
        handleUnfollowUserById(id);
      } else {
        handleFollowUserById(id);
      }
    }
  };

  useEffect(() => {
    setButtonText(isFollowing ? "Unfollow" : "Follow");
  }, [isFollowing]);

  return (
    <button
      type="button"
      className={styles.profileBtn}
      onClick={() => handleUserButton(id)}
    >
      {isOwner ? "Log Out" : buttonText}
    </button>
  );
};

export default UserInfoBtn;
