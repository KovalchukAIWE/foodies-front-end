import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Testimonials.module.css';
import sprite from '../../assets/img/icons-sprite.svg';
import { getTestimonials } from '../../services/testimonials';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        if (Array.isArray(data) && data.length > 0) {
          const formattedTestimonials = data.map(({ testimonial, owner }) => ({
            text: testimonial,
            author: owner.name,
          }));
          setTestimonials(formattedTestimonials);
        } else {
          setTestimonials([]);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError('Error fetching testimonials');
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  if (loading) {
    return <p className={styles.testimonialText}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.testimonialText}>{error}</p>;
  }

  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsSection}>
        <h2 className={styles.sectionSubtitle}>What our customers say</h2>
        <h1 className={styles.sectionTitle}>Testimonials</h1>
        <svg className={styles.testimonialQuote}>
          <use href={`${sprite}#quotes`}></use>
        </svg>
        {testimonials.length > 0 ? (
          <Slider
            {...settings}
            className={styles.testimonialSlick}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={styles.testimonialSlide}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <h3 className={styles.testimonialAuthor}>
                  {testimonial.author}
                </h3>
              </div>
            ))}
          </Slider>
        ) : (
          <p className={styles.testimonialText}>No comments</p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
