import UserInfo from "../UserInfo/UserInfo";
import TabsList from "../TabsList/TabsList";
import styles from "./UserCard.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";

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
    id,
  },
}) => {
  const { id: ownerId } = useSelector(selectUser);
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
        id={id}
        // isOwner={id === ownerId}
        isOwner={true}
        isFollowing={isFollowing}
      />
      <div>
        <TabsList
          // isOwner={id === ownerId}
          isOwner={true}
        />
      </div>
    </div>
  );
};

export default UserCard;
