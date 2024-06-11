import css from "./Testimonials.module.css";
const Testimonials = () => {
  return <section className={css.testimonials}>
    <div className={css.container}>
      <h2 className={css.testimonialsTitle}>Testimonials</h2>
      <h1 className={css.testimonialsSubtitle}>What our customers say</h1>
      
      <p className={css.testimonialsText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className={css.testimonialsName}>John Doe</p>
    </div>
  </section>;
};

export default Testimonials;
