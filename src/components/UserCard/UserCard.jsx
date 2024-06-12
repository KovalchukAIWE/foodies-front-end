import UserInfo from "../UserInfo/UserInfo";
import TabsList from "../TabsList/TabsList";

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
    <div>
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
        <TabsList /> listItems, pagination
      </div>
    </div>
  );
};

export default UserCard;
