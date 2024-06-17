import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Hero from "../../components/Hero/Hero.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Recipes from "../../components/Recipes/Recipes.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { getTestimonials } from "../../services/testimonials.js";
import { getCategories } from "../../services/categories.js";
import { getAllRecipes } from "../../services/recipes.js";

import css from "./HomePage.module.css";
import Container from "../../components/Container/Container.jsx";
import { toast } from "react-toastify";

const HomePage = () => {
  const [categories, setCategories] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [testimonials, setTestimonials] = useState(null);

  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 677px)" });
  const limit = isMobile ? 8 : 12;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const testimonials = await getTestimonials();
        const categories = await getCategories();
        setTestimonials(testimonials);
        setCategories(categories);
      } catch (error) {
        toast.error("Anything went wrong");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!selectedCategories) return;
      try {
        setIsLoading(true);
        const { result, total } = await getAllRecipes({
          category: selectedCategories,
          area: selectedArea,
          ingredient: selectedIngredient,
          page,
          limit,
        });
        setTotalPage(total);
        setRecipes(result);
      } catch (error) {
        toast.error("Anything went wrong");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [selectedCategories, selectedIngredient, selectedArea, page, limit]);

  const handleSelectedCategory = (categoryName) => {
    setSelectedCategories(categoryName);
  };
  const handleSelectedArea = (areaName) => {
    setSelectedArea(areaName);
  };
  const handleSelectedIngredient = (ingredientName) => {
    setSelectedIngredient(ingredientName);
  };
  const handleSetPage = (page) => {
    setPage(page);
  };
  const handleBack = () => {
    setSelectedCategories(null);
    setSelectedIngredient(null);
    setSelectedArea(null);
    setRecipes(null);
    setPage(1);
    setTotalPage(0);
  };

  return (
    <>
      <Hero />
      <section className={css.sectionCategories}>
        <Container>
          {selectedCategories
            ? Array.isArray(recipes) && (
                <Recipes
                  selectedCategories={selectedCategories}
                  selectedIngredient={selectedIngredient}
                  selectedArea={selectedArea}
                  onSelectedArea={handleSelectedArea}
                  onSelectedIngredient={handleSelectedIngredient}
                  onSetPage={handleSetPage}
                  page={page}
                  totalPage={totalPage}
                  onBack={handleBack}
                  recipes={recipes}
                  categories={categories}
                />
              )
            : categories && (
                <Categories
                  onSelectedCategory={handleSelectedCategory}
                  categories={categories}
                />
              )}
        </Container>
      </section>
      <section className={css.sectionTestimonail}>
        <Container>
          {Array.isArray(testimonials) && (
            <Testimonials testimonials={testimonials} />
          )}
        </Container>
      </section>

      {isLoading && <Loader />}
    </>
  );
};

export default HomePage;
