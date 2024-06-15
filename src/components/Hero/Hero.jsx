import { HeroButton } from "../Buttons/Buttons";
import imageLarge from "../../images/hero-img-large.png";
import imageSmall from "../../images/hero-img-small.png";
import ContainerHero from "../ContainerHero/ContainerHero";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { useNavigate } from "react-router-dom";
import { setModalSignInStatus } from "../../redux/user/slice";
import styles from "./Hero.module.css";

const Hero = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddRecipe = () => {
    if (isLoggedIn) {
      navigate("/recipe/add");
      return;
    }
    dispatch(setModalSignInStatus(true));
  };

  return (
    <section className={styles.hero}>
      <ContainerHero>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Improve Your Culinary Talents</h1>
            <p className={styles.heroSubtitle}>
              Amazing recipes for beginners in the world of cooking, enveloping
              you in the aromas and tastes of various cuisines.
            </p>
            <HeroButton onClick={handleAddRecipe} text="Add recipe" />
            <div className={styles.heroImages}>
              <img className={styles.heroImageSm} src={imageSmall} alt="" />
              <img className={styles.heroImageLarge} src={imageLarge} alt="" />
            </div>
          </div>
        </div>
      </ContainerHero>
    </section>
  );
};

export default Hero;
