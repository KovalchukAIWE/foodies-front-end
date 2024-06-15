import UserInfo from "../UserInfo/UserInfo";
import TabsList from "../TabsList/TabsList";
import styles from "./UserCard.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { useParams } from "react-router-dom";

const UserCard = ({
  user: {
    name,
    avatar,
    email,
    ownRecipesCount,
    favoriteRecipesCount,
    followersCount,
    followingCount,
    isFollowing,
  },
}) => {
  const { id: ownerId } = useSelector(selectUser);
  const { id } = useParams();
  console.log(ownerId);

  return (
    <div className={styles.userCard}>
      <UserInfo
        name={name}
        userPhoto={avatar}
        email={email}
        myRecipes={ownRecipesCount}
        favorites={favoriteRecipesCount}
        followers={followersCount}
        followings={followingCount}
        id={ownerId}
        isOwner={id === ownerId}
        isFollowing={isFollowing}
      />
      <div>
        <TabsList isOwner={id === ownerId} />
      </div>
    </div>
  );
};

export default UserCard;
