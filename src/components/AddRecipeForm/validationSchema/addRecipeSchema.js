import * as yup from "yup";

// const recipeIngredientsSchema = yup
//   .object({
//     ingredientId: yup.string().required(),
//     measure: yup.string().required(),
//   })
//   .required();

const addRecipeSchema = yup
  .object({
    title: yup
      .string()
      .min(3, "Recipe title must be at least 3 characters long")
      .required(),
    description: yup
      .string()
      .min(3, "Recipe description must be at least 3 characters long")
      .max(200, "Recipe description must be 200 characters long")
      .required(),
    category: yup.string().required(),
    time: yup.string().min(1, "Cooking time must be at least 1 min").required(),
    // ingredients: yup.array(recipeIngredientsSchema).required(),
    instructions: yup
      .string()
      .min(3, "Recipe preparation must be at least 3 characters long")
      .max(200, "Recipe preparation must be 200 characters long")
      .required(),
  })
  .required();

export default addRecipeSchema;
