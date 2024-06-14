import UserInfo from "../UserInfo/UserInfo";
import TabsList from "../TabsList/TabsList";
import styles from "./UserCard.module.css";

const UserCard = ({
  name,
  avatar,
  email,
  ownRecipesCount,
  favoriteRecipesCount,
  followersCount,
  followingCount,
  id,
}) => {
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
      />
      <div>
        <TabsList />
      </div>
    </div>
  );
};

export default UserCard;
