import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <button>
        <img src={recipe.author.avatar} alt={recipe.author.name} />
        {recipe.author.name}
      </button>
    </div>
  );
};

export default RecipeCard;
