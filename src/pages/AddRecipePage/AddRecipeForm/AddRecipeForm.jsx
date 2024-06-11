import { useForm, Controller } from "react-hook-form";

import styles from "./AddRecipeForm.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

import {
  DeleteButton,
  AddIngrButton,
  MinusButton,
  PlusButton,
} from "../../../components/Buttons/Buttons";
import SelectDropDown from "../../../components/SelectDropDown/SelectDropDown";

const options = [
  { value: "beef", label: "Beef" },
  { value: "breakfast", label: "Breakfast" },
  { value: "desserts", label: "Desserts" },
  { value: "lamb", label: "Lamb" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "pasta", label: "Pasta" },
  { value: "pork", label: "Pork" },
  { value: "seafood", label: "Seafood" },
  { value: "side", label: "Side" },
  { value: "starter", label: "Starter" },
];

const AddRecipeForm = () => {
  const {
    register,
    control,
    //reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  //reset();
  const onSelectCategory = (value) => console.log(value);
  const onSelectIngredient = (value) => console.log(value);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.uploadPhoto}>
        <svg width={50} height={50} className={styles.svgPhoto}>
          <use href={`${sprite}#photo`}></use>
        </svg>
        <p className={styles.uploadPhotoText}>Upload a photo</p>
      </div>
      <div className={styles.formOptionals}>
        <input
          type="text"
          {...register("recipeName", { required: true })}
          placeholder="THE NAME OF THE RECIPE"
          className={styles.recipeName}
        />

        <div className={styles.formOptionsWrapper}>
          <div className={`${styles.inputAreaWrapper} ${styles.recipeDescr}`}>
            <input
              type="text"
              {...register(
                "recipeDescr",
                { required: true },
                { maxLength: 220 }
              )}
              placeholder="Enter a description of the dish"
              className={` ${styles.inputArea} text`}
            />
            <p className={`${styles.symbCounter} text`}>0/200</p>
          </div>
          <div className={styles.addOptionsWrapper}>
            <label htmlFor="category">Category</label>
            <Controller
              render={({ field }) => (
                <SelectDropDown
                  field={field}
                  options={options}
                  placeholder={"Select a category"}
                  selectedOption={null}
                  onSelect={onSelectCategory}
                  name={"category"}
                />
              )}
              name={"category"}
              control={control}
            />
            {/* <select
               {...register("category", { required: true })}
              placeholder="Select a category"
            >
              <option value="beef">Beef</option>
              <option value="breakfast">Breakfast</option>
              <option value="desserts">Desserts</option>
              <option value="lamb">Lamb</option>
              <option value="miscellaneous">Miscellaneous</option>
              <option value="pasta">Pasta</option>
              <option value="pork">Pork</option>
              <option value="seafood">Seafood</option>
              <option value="side">Side</option>
              <option value="starter">Starter</option>
            </select> */}
          </div>

          <div className={styles.addOptionsWrapper}>
            <label htmlFor="">COOKING TIME</label>
            <div className={styles.counter}>
              <MinusButton type="button" />
              <span className={`${styles.counterNum} text`}>10 min</span>
              <PlusButton type="button" />
            </div>
          </div>

          <div className={styles.addOptionsWrapper}>
            <label htmlFor="ingredients">Ingredients</label>
            <SelectDropDown
              placeholder={"Add the ingredient"}
              options={options}
              selectedOption={null}
              onSelect={onSelectIngredient}
              name={"ingredients"}
            />
            {/* <select
              {...register("ingredients", { required: true })}
              placeholder="Add the ingredient"
            >
              <option value="Cabbage">Cabbage</option>
              <option value="Cucumber">Cucumber</option>
              <option value="desserts">Desserts</option>
              <option value="Lamb">Lamb</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Pasta">Pasta</option>
              <option value="Pork">Pork</option>
              <option value="Seafood">Seafood</option>
              <option value="Side">Side</option>
              <option value="Starter">Starter</option>
            </select> */}
          </div>
          <div className={styles.addOptionsWrapper}>
            <input
              type="text"
              {...register("ingredientsQuantity", { required: true })}
              placeholder="Enter quantity"
              className={`${styles.ingredientsQuantity} text`}
            />
          </div>
        </div>
        <AddIngrButton text="Add ingredient" type="button" />

        <div className={styles.recipePreparation}>
          <label htmlFor="recipePreparation">Recipe Preparation</label>
          <div className={styles.inputAreaWrapper}>
            <textarea
              {...register(
                "recipePreparation",
                { required: true },
                { maxLength: 220 }
              )}
              placeholder="Enter recipe"
              className={`${styles.inputArea} text`}
            />
            <p className={`${styles.symbCounter} text`}>0/200</p>
          </div>
        </div>
        <div className={styles.bottomBtns}>
          <DeleteButton />
          <input type="submit" className={styles.submitBtn} />
        </div>
      </div>
    </form>
  );
};

export default AddRecipeForm;
