import { HeroButton } from '../Buttons/Buttons';
import imageLargePng from '../../images/hero-img-large.png';
import imageLargePng2x from '../../images/hero-img-large@2x.png';
import imageLargeWebp from '../../images/hero-img-large.webp';
import imageLargeWebp2x from '../../images/hero-img-large@2x.webp';
import imageSmallPng from '../../images/hero-img-small.png';
import imageSmallPng2x from '../../images/hero-img-small@2x.png';
import imageSmallWebp from '../../images/hero-img-small.webp';
import imageSmallWebp2x from '../../images/hero-img-small@2x.webp';
import ContainerHero from '../ContainerHero/ContainerHero';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import { useNavigate } from 'react-router-dom';
import { setModalSignInStatus } from '../../redux/user/slice';
import styles from './Hero.module.css';

const Hero = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddRecipe = () => {
    if (isLoggedIn) {
      navigate('/recipe/add');
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
            <HeroButton
              onClick={handleAddRecipe}
              text='Add recipe'
            />
            <div className={styles.heroImages}>
              <picture>
                <source
                  srcSet={`${imageSmallWebp}, ${imageSmallWebp2x} 2x`}
                  type='image/webp'
                />
                <source
                  srcSet={`${imageSmallPng}, ${imageSmallPng2x} 2x`}
                  type='image/png'
                />
                <img
                  className={styles.heroImageSm}
                  src={imageSmallPng}
                  srcSet={`${imageSmallPng2x} 2x`}
                  alt=''
                />
              </picture>
              <picture>
                <source
                  srcSet={`${imageLargeWebp}, ${imageLargeWebp2x} 2x`}
                  type='image/webp'
                />
                <source
                  srcSet={`${imageLargePng}, ${imageLargePng2x} 2x`}
                  type='image/png'
                />
                <img
                  className={styles.heroImageLarge}
                  src={imageLargePng}
                  srcSet={`${imageLargePng2x} 2x`}
                  alt=''
                />
              </picture>
            </div>
          </div>
        </div>
      </ContainerHero>
    </section>
  );
};

export default Hero;
