import { useEffect, useState } from "react";

import Hero from "../../components/Hero/Hero.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Recipes from "../../components/Recipes/Recipes.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import { getTestimonials } from "../../services/testimonials.js";

const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [error, setError] = useState(null);
  const [testimonials, setTestimonials] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await getTestimonials();
        setTestimonials(result);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  const handleSelectedCategory = (categoryName) => {
    setSelectedCategories(categoryName);
  };
  const handleBack = () => {
    setSelectedCategories(null);
  };

  return (
    <>
      <Hero />
      {selectedCategories ? (
        <Recipes selectedCategories={selectedCategories} onBack={handleBack} />
      ) : (
        <Categories onSelectedCategory={handleSelectedCategory} />
      )}

      {Array.isArray(testimonials) && (
        <Testimonials testimonials={testimonials} />
      )}

      {/* Поміняти на компонент нотифікашки */}
      {error && <p>{error}</p>}
    </>
  );
};

export default HomePage;
