import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
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

const ListItems = ({ activeTab, updating, onUpdating }) => {
  const { id } = useParams();
  const { id: ownerId } = useSelector(selectUser);
  const [arrToRender, setArrToRender] = useState([]);

  const [messageEmptyData, setMessageEmptyData] = useState(
    "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
  );

  const handleDeleteRecipeById = async (id) => {
    try {
      const response = await deleteRecipeById(id);
      console.log(response);

      onUpdating(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFollowUserById = async (id) => {
    try {
      const { follow } = await setFollowUserByUserId(id);
      console.log(follow);

      // if (follow) {
      onUpdating(true);
      // } else {
      //   throw new Error("Failed to follow this user");
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUnfollowUserById = async (id) => {
    try {
      const response = await setUnfollowUserByUserId(id);
      console.log(response);

      onUpdating(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!updating) return;
    (async () => {
      try {
        if (activeTab === "followingActiveTab") {
          const { result } = await getUsersFollowingsByUserId(ownerId);
          setArrToRender(result);
          setMessage("followingActiveTab", setMessageEmptyData);
        } else if (activeTab === "favoritesActiveTab") {
          const { result } = await getUsersFavoriteRecipes();
          setArrToRender(result);
          setMessage("favoritesActiveTab", setMessageEmptyData);
        } else if (activeTab === "followersActiveTab") {
          const { result } = await getUsersFollowersByUserId(ownerId);
          setArrToRender(result);
          setMessage("followersActiveTab", setMessageEmptyData);
        } else {
          const { result } = await getOwnUsersRecipes();
          setArrToRender(result);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        onUpdating(false);
      }
    })();
  }, [activeTab, id, updating]);

  return arrToRender.length > 0 ? (
    <ul className={styles.recipesList}>
      {arrToRender.map((item) =>
        activeTab === "favoritesActiveTab" ||
        activeTab === "recipiesActiveTab" ? (
          <RecipePreview
            img={item.thumb}
            recipeName={item.title}
            text={item.instructions}
            id={item._id}
            key={item._id}
            handleDeleteRecipe={handleDeleteRecipeById}
          />
        ) : (
          <UserPreview
            avatar={item.avatar}
            name={item.name}
            ownRecipes={item.totalRecipes}
            isFollow={item.isFollow}
            recipes={item.recipes}
            id={item._id}
            key={item._id}
            onClick={
              item.isFollow ? handleUnfollowUserById : handleFollowUserById
            }
            // total={item.total}
            // page={item.page}
            // limit={item.limit}
          />
        )
      )}
    </ul>
  ) : (
    <p className={styles.emptyListMessage}>{messageEmptyData}</p>
  );
};

export default ListItems;
