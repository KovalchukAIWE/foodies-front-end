import { MyRecipeFavoriteCard } from "../MyRecipeFavoriteCard/MyRecipeFavoriteCard";
import styles from "./MyRecipiesList.module.css";

export const MyRecipiesFavoritesList = () => {
  const arr = [];

  return `<ul className=${styles.myRecipesList}>${arr.map(
    ({ img, text, id, recipeName }) => (
      <MyRecipeFavoriteCard
        img={img}
        text={text}
        id={id}
        key={id}
        recipeName={recipeName}
      />
    )
  )}</ul>`;
};
