import * as yup from "yup";

yup.addMethod(yup.string, "wordsMaxCount", function (maxWords, errorMessage) {
  return this.test(`test-words-count`, errorMessage, function (value) {
    const { path, createError } = this;
    const words = value.trim().split(" ").length;

    return words < maxWords || createError({ path, message: errorMessage });
  });
});

yup.addMethod(yup.string, "wordsMinCount", function (minWords, errorMessage) {
  return this.test(`test-words-count`, errorMessage, function (value) {
    const { path, createError } = this;
    const words = value.trim().split(" ").length;

    return minWords <= words || createError({ path, message: errorMessage });
  });
});

const addRecipeSchema = yup
  .object()
  .shape({
    thumb: yup.mixed().required("Photo is required"),
    title: yup
      .string()
      .required("Title is required")
      .min(3, "Recipe title must be at least 3 characters long"),
    description: yup
      .string()
      .required("Recipe description is required")
      .wordsMinCount(3, "Recipe description must be at least 3 words long")
      .wordsMaxCount(200, "Recipe description must be maximum 200 words long"),

    category: yup.string().required("Category is required"),
    time: yup.string().min(1, "Cooking time must be at least 1 min").required(),
    ingredientsCount: yup.number().min(1, "Ingredient is required").required(),
    instructions: yup
      .string()
      .required("Recipe preparation is required")
      .wordsMinCount(3, "Recipe preparation must be at least 3 words long")
      .wordsMaxCount(200, "Recipe preparation must be maximum 200 words long"),
  })
  .required();

export default addRecipeSchema;
