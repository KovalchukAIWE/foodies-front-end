import { useEffect, useState } from "react";
import {
  setFollowUserByUserId,
  setUnfollowUserByUserId,
} from "../../services/user";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/user/operations";
import styles from "./UserInfoBtn.module.css";
import { toast } from "react-toastify";

const UserInfoBtn = ({ isOwner, isFollowing: initialIsFollowing, id }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const [buttonText, setButtonText] = useState(
    isFollowing ? "Unfollow" : "Follow"
  );
  const dispatch = useDispatch();

  const handleFollowUserById = async (id) => {
    try {
      const { follow } = await setFollowUserByUserId({ id });
      if (follow) {
        toast.success("Follow success!");
        setIsFollowing(true);
        setButtonText("Unfollow");
      }
    } catch (error) {
      toast.error("Anything went wrong!");
    }
  };

  const handleUnfollowUserById = async (id) => {
    try {
      const { unfollow } = await setUnfollowUserByUserId({ id });
      if (unfollow) {
        setIsFollowing(false);
        setButtonText("Follow");
        toast.success("Unfollow success!");
      }
    } catch (error) {
      toast.error("Anything went wrong!");
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
