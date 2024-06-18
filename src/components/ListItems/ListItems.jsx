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
import ListPagination from "../ListPagination/ListPagination";
import { toast } from "react-toastify";

const ListItems = ({
  activeTab,
  setterActiveTab,
  updating,
  onUpdating,
  isOwner,
}) => {
  const { id } = useParams();
  const { id: ownerId } = useSelector(selectUser);
  const [arrToRender, setArrToRender] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsLimit] = useState(9);
  const [pageItems, setPageItems] = useState(1);

  const [messageEmptyData, setMessageEmptyData] = useState(
    "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
  );

  const setDataForPagination = ({ total }) => {
    setTotalItems(total);
  };

  const handleChangePage = (num) => {
    onUpdating(true);
    setPageItems(num);
  };
  const handleDeleteRecipeById = async (id) => {
    try {
      const response = await deleteRecipeById(id);
      console.log(response);

      onUpdating(true);
    } catch (error) {
      toast.error("Anything went wrong!");
    }
  };

  const handleFollowUserById = async (id) => {
    try {
      const { follow } = await setFollowUserByUserId({ id });

      if (follow) toast.success("Follow success!");

      onUpdating(true);
    } catch (error) {
      toast.error("Anything went wrong!");
    }
  };

  const handleUnfollowUserById = async (id) => {
    try {
      const { unfollow } = await setUnfollowUserByUserId({ id });

      if (unfollow) toast.success("Unfollow success!");

      onUpdating(true);
    } catch (error) {
      toast.error("Anything went wrong!");
    }
  };

  useEffect(() => {
    if (id !== ownerId) {
      setterActiveTab("recipiesActiveTab");
      onUpdating(true);
    }
  }, [id]);

  useEffect(() => {
    if (!updating) return;

    (async () => {
      try {
        if (activeTab === "followingActiveTab") {
          const { total, page, limit, result } =
            await getUsersFollowingsByUserId();
          setArrToRender(result);
          setDataForPagination({ total, page, limit });
          setMessage("followingActiveTab", setMessageEmptyData);
        } else if (activeTab === "favoritesActiveTab") {
          const { total, page, limit, result } = await getUsersFavoriteRecipes({
            limit: itemsLimit,
            page: pageItems,
          });
          setArrToRender(result);
          setDataForPagination({ total, page, limit });
          setMessage("favoritesActiveTab", setMessageEmptyData);
        } else if (activeTab === "followersActiveTab") {
          const { total, page, limit, result } =
            await getUsersFollowersByUserId();
          setArrToRender(result);
          setDataForPagination({ total, page, limit });
          setMessage("followersActiveTab", setMessageEmptyData);
        } else if (id === ownerId) {
          const { total, page, limit, result } = await getOwnUsersRecipes({
            limit: itemsLimit,
            page: pageItems,
          });

          setArrToRender(result);
          setDataForPagination({ total, page, limit });
        } else {
          // оновити сервісну функцію на запит рецептів по айді юзера
          const { total, page, limit, result } = await getOwnUsersRecipes({
            limit: itemsLimit,
            page: pageItems,
          });
          setArrToRender(result);
          setDataForPagination({ total, page, limit });
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        onUpdating(false);
      }
    })();
  }, [activeTab, id, updating, pageItems]);

  return arrToRender.length > 0 ? (
    <>
      <ul className={styles.recipesList}>
        {arrToRender.map((item) =>
          activeTab === "favoritesActiveTab" ||
          activeTab === "recipiesActiveTab" ? (
            <RecipePreview
              img={item.thumb}
              recipeName={item.title}
              text={item.description}
              id={item._id}
              key={item._id}
              title={item.title}
              handleDeleteRecipe={handleDeleteRecipeById}
              isOwner={isOwner}
            />
          ) : (
            <UserPreview
              avatar={item.avatar}
              name={item.name}
              ownRecipes={item.totalRecipes}
              isFollow={item.isFollowing}
              recipes={item.recipes}
              id={item._id}
              key={item._id}
              onClick={
                item.isFollowing ? handleUnfollowUserById : handleFollowUserById
              }
            />
          )
        )}
      </ul>
      {totalItems > itemsLimit && (
        <div>
          <ListPagination
            total={totalItems}
            page={pageItems}
            limit={itemsLimit}
            onPageChange={handleChangePage}
          />
        </div>
      )}
    </>
  ) : (
    <p className={styles.emptyListMessage}>{messageEmptyData}</p>
  );
};

export default ListItems;
