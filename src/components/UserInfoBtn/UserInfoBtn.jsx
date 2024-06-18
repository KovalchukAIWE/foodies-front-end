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
  const [isFollow, setIsFollow] = useState(initialIsFollowing);

  const [buttonText, setButtonText] = useState(
    isFollow ? "Unfollow" : "Follow"
  );
  const dispatch = useDispatch();

  const handleFollowUserById = async (id) => {
    try {
      const { follow } = await setFollowUserByUserId({ id });
      if (follow) {
        toast.success("Follow success!");
        setIsFollow(true);
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
        setIsFollow(false);
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
      if (isFollow) {
        handleUnfollowUserById(id);
      } else {
        handleFollowUserById(id);
      }
    }
  };

  useEffect(() => {
    setButtonText(isFollow ? "Unfollow" : "Follow");
  }, [isFollow]);

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
