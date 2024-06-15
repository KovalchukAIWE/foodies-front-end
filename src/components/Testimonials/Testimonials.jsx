import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Testimonials.module.css';
import Container from '../Container/Container';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('/api/testimonials')
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setTestimonials(data);
        } else {
          // Якщо дані не є масивом, встановлюємо фіктивні дані
          setTestimonials([
            {
              text: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
              author: 'LARRY PAGEIM',
            },
            {
              text: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
              author: 'LARRY PAGEIM',
            },
            {
              text: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
              author: 'LARRY PAGEIM',
            },
          ]);
        }
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
        // Використовуємо фіктивні дані у разі помилки
        setTestimonials([
          {
            text: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
            author: 'LARRY PAGEIM',
          },
          {
            text: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
            author: 'LARRY PAGEIM',
          },
          {
            text: 'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!',
            author: 'LARRY PAGEIM',
          },
        ]);
      });
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

  return (
    <Container>
      <section className={styles.testimonials}>
        <div className={styles.testimonialsSection}>
          <h2 className={styles.sectionSubtitle}>What our customer say</h2>
          <h1 className={styles.sectionTitle}>Testimonials</h1>
          <svg className={styles.testimonialQuote}>
            <use href='/vite.svg#untitled'></use>
          </svg>
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
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
            <p>There are currently no reviews.</p>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
