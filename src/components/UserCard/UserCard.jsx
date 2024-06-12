import UserInfo from "../UserInfo/UserInfo";
import TabsList from "../TabsList/TabsList";
import styles from "./UserCard.module.css";

const UserCard = ({
  name,
  userPhoto,
  email,
  myRecipes,
  favorites,
  followers,
  followings,
  id,
}) => {
  return (
    <div className={styles.userCard}>
      <UserInfo
        name={name}
        userPhoto={userPhoto}
        email={email}
        myRecipes={myRecipes}
        favorites={favorites}
        followers={followers}
        followings={followings}
        id={id}
      />
      <div>
        <TabsList />
      </div>
    </div>
  );
};

export default UserCard;
