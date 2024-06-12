import React from "react";
import RecipeFilters from "../RecipeFilters/RecipeFilters";
import RecipeList from "../RecipeList/RecipeList";
import RecipePagination from "../RecipePagination/RecipePagination";

const Recipes = ({ onBack, recipes }) => {
  if (!Array.isArray(recipes)) {
    return <p>No recipes available.</p>;
  }
  return (
    <div>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <RecipeFilters />
      <RecipeList recipes={recipes} />
      <RecipePagination />
    </div>
  );
};

export default Recipes;
