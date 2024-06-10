import Hero from "../../components/Hero/Hero.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Recipes from "../../components/Recipes/Recipes.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <Testimonials />
    </>
  );
};

export default HomePage;
