import { useEffect, useState } from "react";
// import {
//   getOwnUsersRecipes,
//   getUsersFavoriteRecipes,
// } from "../../services/recipes";
// import {
//   getUsersFollowersByUserId,
//   getUsersFollowingsByUserId,
// } from "../../services/user";
import RecipePreview from "../RecipePreview/RecipePreview";
import styles from "./ListItems.module.css";

const ListItems = ({ activeTab }) => {
  const [arrToRender, setArrToRender] = useState([]);
  let message =
    "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future.";
  // useEffect(() => {

  //   try {
  //     if (activeTab === "followingActiveTab") {
  //       const userFollowings = getUsersFollowingsByUserId();
  //       setArrToRender(userFollowings);
  // message =
  //   "Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you.";
  //     } else if (activeTab === "favoritesActiveTab") {
  //       const myFavoritesRecipes = getUsersFavoriteRecipes();
  //       setArrToRender(myFavoritesRecipes);
  // message =
  //   "Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future.";
  //     } else if (activeTab === "followersActiveTab") {
  //       const userFollowers = getUsersFollowersByUserId();
  //       setArrToRender(userFollowers);
  // message =
  //   "There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile.";
  //     } else {
  //       const myOwnRecipes = getOwnUsersRecipes();
  //       setArrToRender(myOwnRecipes);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, [activeTab]);

  return arrToRender.length === 0 ? (
    <ul className={styles.myRecipesList}>
      {arrToRender.map(({ img, text, id, recipeName }) => (
        <RecipePreview
          img={img}
          text={text}
          id={id}
          key={id}
          recipeName={recipeName}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.emptyListMessage}>{message}</p>
  );
};

export default ListItems;
