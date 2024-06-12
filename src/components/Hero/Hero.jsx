import { HeroButton } from "../Buttons/Buttons";
import imageLarge from "../../images/hero-img-large.png";
import imageSmall from "../../images/hero-img-small.png";
import ContainerHero from "../ContainerHero/ContainerHero";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <ContainerHero>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Improve Your Culinary Talents</h1>
        <p className={styles.heroSubtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </p>
        <HeroButton text="Add recipe" />
        <div className={styles.heroImages}>
          <img className={styles.heroImageSm} src={imageSmall} alt="" />
          <img className={styles.heroImageLarge} src={imageLarge} alt="" />
        </div>
      </div>
    </ContainerHero>
  );
};

export default Hero;
