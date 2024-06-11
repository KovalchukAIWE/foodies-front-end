import { useEffect, useState } from "react";
import { MyRecipeFavoriteCard } from "../MyRecipeFavoriteCard";

const ListItems = () => {
  const [activeTab, setActiveTab] = useState("recipe");

  useEffect(() => {}, [activeTab]);

  return activeTab === "recipe" ? (
    `<ul className=${styles.myRecipesList}>${arr.map(
      ({ img, text, id, recipeName }) => (
        <MyRecipeFavoriteCard
          img={img}
          text={text}
          id={id}
          key={id}
          recipeName={recipeName}
        />
      )
    )}</ul>`
  ) : (
    <ul>
      <li>
        <p>userCard</p>
      </li>
    </ul>
  );
};

export default ListItems;
