import { useEffect, useState } from "react";
import {
  getOwnUsersRecipes,
  getUsersFavoriteRecipes,
  deleteRecipeById,
} from "../../services/recipes";
import {
  getUsersFollowersByUserId,
  getUsersFollowingsByUserId,
  setFollowUserByUserId,
  setUnfollowUserByUserId,
} from "../../services/user";
import { setMessage } from "../../helpers/helpers";
import RecipePreview from "../RecipePreview/RecipePreview";
import UserPreview from "../UserPreview/UserPreview";
import styles from "./ListItems.module.css";
import { useParams } from "react-router-dom";

const ListItems = ({ activeTab }) => {
  const { id } = useParams();
  const [arrToRender, setArrToRender] = useState([]);
  const [messageEmptyData, setMessageEmptyData] = useState(
    "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
  );

  const handleDeleteRecipeById = async (id) => {
    try {
      const response = await deleteRecipeById(id);
      if (response.ok) {
        const updatedRecipes = await getOwnUsersRecipes();
        setArrToRender(updatedRecipes);
      } else {
        throw new Error("Failed to delete the recipe");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFollowUserById = async (id, userId) => {
    try {
      const response = await setFollowUserByUserId(id);
      if (response.ok) {
        const updatedFollowings = await getUsersFollowingsByUserId(userId);
        setArrToRender(updatedFollowings);
      } else {
        throw new Error("Failed to follow this user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUnfollowUserById = async (id, userId) => {
    try {
      const response = await setUnfollowUserByUserId(id);
      if (response.ok) {
        const updatedFollowers = await getUsersFollowersByUserId(userId);
        setArrToRender(updatedFollowers);
      } else {
        throw new Error("Failed to Unfollow this user, try later");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    try {
      if (activeTab === "followingActiveTab") {
        const userFollowings = getUsersFollowingsByUserId(id);
        setArrToRender(userFollowings);
        setMessage("followingActiveTab", setMessageEmptyData);
      } else if (activeTab === "favoritesActiveTab") {
        const myFavoritesRecipes = getUsersFavoriteRecipes();
        setArrToRender(myFavoritesRecipes);
        setMessage("favoritesActiveTab", setMessageEmptyData);
      } else if (activeTab === "followersActiveTab") {
        const userFollowers = getUsersFollowersByUserId(id);
        setArrToRender(userFollowers);
        setMessage("followersActiveTab", setMessageEmptyData);
      } else {
        const myOwnRecipes = getOwnUsersRecipes();
        setArrToRender(myOwnRecipes);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [activeTab, id]);

  return arrToRender.length > 0 ? (
    <ul className={styles.myRecipesList}>
      {arrToRender.map((item) =>
        activeTab === "favoritesActiveTab" ||
        activeTab === "recipiesActiveTab" ? (
          <RecipePreview
            img={item.thumb}
            recipeName={item.title}
            text={item.description}
            id={item.id}
            key={item.id}
            handleDeleteRecipe={handleDeleteRecipeById}
          />
        ) : (
          <UserPreview
            avatar={item.avatar}
            name={item.name}
            ownRecipes={item.ownRecipes}
            isFollow={item.isFollow}
            recipesPhotos={item.recipesPhotos}
            id={item.id}
            key={item.id}
            onClick={item.isFollow ? handleUnfollowUserById : handleFollowUserById}
          />
        )
      )}
    </ul>
  ) : (
    <p className={styles.emptyListMessage}>{messageEmptyData}</p>
  );
};

export default ListItems;
